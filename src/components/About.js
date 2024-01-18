import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const About = () =>{
    const resId=useParams();
    const {id}=resId;
    console.log("ok",id);
    return (
        <>
        <Outlet/>
        <section className="about">
            <h1>About Us</h1>
            <h3>Bhoapli Food</h3>
            <div className="about-info">
                <div className="about-img">
                    <img src="" alt="" srcSet="" />
                </div>
                <div>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dignissimos temporibus nisi sint modi vero reiciendis repellendus hic, expedita necessitatibus? Animi quaerat pariatur provident quas dolore tempore amet omnis impedit.
                        Totam minima molestias nisi quas officia enim quidem cupiditate aut, quis labore, repellat vitae voluptas iste! Laudantium animi sapiente velit officia natus officiis earum corporis itaque, doloremque quis repudiandae aliquid.
                        Omnis sequi veniam voluptatum ipsum ratione. Error porro at, eos explicabo dolore fugiat quisquam! Perspiciatis ullam maiores nihil ipsum? Hic explicabo facere magni, ab voluptatum numquam. Fuga sint vel praesentium?
                        Consequuntur autem beatae vitae sed voluptatum molestias, fugiat maiores quis aspernatur, corrupti aperiam quam aut vel quod ex nostrum assumenda necessitatibus veritatis! Atque eaque ea aperiam aliquid harum maxime illum.
                        Delectus architecto, eum itaque et quae error at ducimus ad illum suscipit beatae dignissimos maiores quis! Sed quisquam omnis repellendus incidunt? Reprehenderit expedita vitae distinctio, cumque at delectus similique molestiae!
                        Ratione est reprehenderit excepturi maiores voluptas! Commodi, a minima aliquam earum dolorem debitis autem recusandae quasi similique dolorum nihil deserunt fugit sit. Corrupti quo, explicabo amet sapiente veritatis itaque incidunt.
                    </p>
                    <button>Read More...</button>
                </div>
            </div>
        </section> 
        </>
    )
}

export default About;