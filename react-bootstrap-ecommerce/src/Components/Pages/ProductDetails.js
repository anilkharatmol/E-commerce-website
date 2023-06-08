import { useParams } from "react-router-dom";
import './ProductDetails.css';

export default function ProductDetails(){

    const params=useParams();

    return(
        <section>
         {  params.productname==='Black shirt' && <div> <h1 className="h1" >{params.productname}</h1>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/4/m/z/m-srt-001-black-moonvelly-original-imaga5mzsfagqjhe.jpeg?q=70" 
         alt="black shirt  2"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/k/s/l/m-srt-001-black-moonvelly-original-imaghzu2mng6vzmv.jpeg?q=70" 
         alt="black shirt  3"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/e/n/p/m-srt-001-black-moonvelly-original-imaghzu2uvkpk79b.jpeg?q=70"
         alt="black shirt  4"/>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/o/8/m-srt-001-black-moonvelly-original-imaghzu2bt94z6ht.jpeg?q=70"
         alt="black shirt  5"/>
         <h1 className="review">Ratings and reviews</h1>
         <footer>
            <div>
         <h3 style={{color:'green'}}> USER 1_____________4/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview"> Nice product </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 2_____________4.5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview"> Value for money! must buy </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 3_____________3/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview"> not satisfied </p>
             </div>
          </footer> </div>}


         {params.productname==='Jeans' &&  <div> <h1 className="h1">{params.productname}</h1>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/30-11274630-roadster-original-imafpmreswjns5a4.jpeg?q=70" 
          alt="Jeans 2"/>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/30-11274630-roadster-original-imafpmrebupcjz77.jpeg?q=70" 
          alt="Jeans  3"/>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/32-11274630-roadster-original-imafpmrezygjzrk4.jpeg?q=70"
          alt="Jeans  4"/>
           <img className="image" src="https://rukminim1.flixcart.com/image/832/832/k7dnonk0/jean/y/h/z/30-11274630-roadster-original-imafpmrezphxwdmk.jpeg?q=70"
          alt="Jeans  5"/>
          <h1 className="review">Ratings and reviews</h1>
          <footer>
             <div>
          <h3 style={{color:'green'}}> USER 1_____________5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
          </h3>
                 <p className="userreview"> Nice Quality Jeans </p>
                 <hr></hr>
                 <h3 style={{color:'green'}}> USER 2_____________4/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
          </h3>
                 <p className="userreview"> Awesome product! </p>
                 <hr></hr>
                 <h3 style={{color:'green'}}> USER 3_____________4.5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
          </h3>
                 <p className="userreview"> Very good</p>
              </div>
           </footer> </div>}


           {  params.productname==='Yellow T-shirt' && <div> <h1 className="h1" >{params.productname}</h1>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yx65kzpbde.jpeg?q=70" 
         alt="Yellow T-shirt  2"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yxthshhkms.jpeg?q=70" 
         alt="Yellow T-shirt  3"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yx9kgvxgbc.jpeg?q=70"
         alt="Yellow T-shirt  4"/>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/jsrtn680/t-shirt/5/t/s/5xl-tshirt400mustard-chkokko-original-imafb9yxztzmffzg.jpeg?q=70"
         alt="Yellow T-shirt  5"/>
         <h1 className="review">Ratings and reviews</h1>
         <footer>
         <div>
         <h3 style={{color:'green'}}> USER 1_____________5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview">After 15 days of use, this product is good, cloth fabric is excellent.... </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 2_____________4/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview"> Clothe's febric is not so good, but easy to wear & this is nice product!!! I just like it ❤️ </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 3_____________3/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview">very good material </p>
             </div>
          </footer> </div>}


          {  params.productname==='White Kurta' && <div> <h1 className="h1" >{params.productname}</h1>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/j/x/4/m-white-kurta-taruncollection-original-imag7h4guftdzbhh.jpeg?q=70" 
         alt="White Kurta  2"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/t/0/j/m-white-kurta-taruncollection-original-imag7h4g4kyf8z82.jpeg?q=70" 
         alt="White Kurta  3"/>
         <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/i/b/8/m-white-kurta-taruncollection-original-imagkehfhdhrbykc.jpeg?q=70"
         alt="White Kurta 4"/>
          <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/g/p/5/m-white-kurta-taruncollection-original-imag7h4gxyfw58ev.jpeg?q=70"
         alt="White Kurta  5"/>
         <h1 className="review">Ratings and reviews</h1>
         <footer>
            <div>
         <h3 style={{color:'green'}}> USER 1_____________5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview">What a product
Good in price
Looking gorgeous </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 2_____________4/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview"> Very good kurta pure cotton </p>
                <hr></hr>
                <h3 style={{color:'green'}}> USER 3_____________5/5<img className="starimage" src="https://t3.ftcdn.net/jpg/02/12/94/86/360_F_212948692_hmAugxE54yt4XGzqCeImTZjNyYkAX7S4.jpg" alt="star"/>
         </h3>
                <p className="userreview">Best product in this price range. </p>
             </div>
          </footer> </div>}
        </section>
    )
}