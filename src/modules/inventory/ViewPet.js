import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { ApiEndPoints } from "../../constants/AppConstants";
import { addToCart } from "../../redux/actionCreators/CartActionCreator";

const ViewPet = ({addToMyCart, myCart}) => {
    let { id } = useParams();
    const [pet, setPet]=useState({
        id: 0,
        name: '',
        category: {
            id: 0,
            name: ''
        },
        photoUrls: [],
        tags:[]
    });
    
    const[notFound, setNotFound] = useState(false);

    useEffect(()=>{
        loadPetDetail();
    }, [id]);

    const AddToCart = () => {
        addToMyCart({id});
    }

    const CheckOut = () => {

    }
    
    const loadPetDetail = () => {
        const url = `${ApiEndPoints.PetDetail}/${id}`;
        axios.get(url).then(resp => {
            const petDetail = resp.data;
            console.log(petDetail);
            setPet(prevValues => (
                {
                    ...prevValues,
                    ...petDetail
                }
            ));
                
            
        }).catch(err => {
            console.log(err.response.data)
            const { code, message } = err.response.data
            if(code === 404)
            {
                setNotFound(true);
            }
        });
    }
    return (
        <>
            { !notFound && 
                <div className="card" style={{width:400}}>
                    <img className="card-img-top" src={`https://picsum.photos/200/300`} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{pet.name}</h4>
                        <p className="card-text">Category: {pet.category.name}</p>
                        <button className="btn btn-light" onClick={AddToCart} >Add To Cart</button>
                    </div>
                </div>
            }
            <div>

            </div>
            { notFound && <h1 style={{'color': 'Red'}}>Pet not found</h1>}
            { myCart && 
            <div>
                <h1 style={{'color': 'Navy'}}>Items in cart: {myCart.length}</h1>
                
                    <button className="btn btn-dark" onClick={CheckOut} >Check out</button>
                </div>
            }
        </>
    )
}

const mapToState = (state) => ({
    myCart: state.Cart
})
const mapToDispatch = (dispatch) => ({
    addToMyCart: (pet) => dispatch(addToCart(pet))
})
export default connect(mapToState, mapToDispatch)(ViewPet);