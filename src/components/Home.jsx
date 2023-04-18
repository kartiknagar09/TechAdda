import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechAdda</h1>
          <p>Solotion to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increse the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            unde beatae nobis ipsam dolor accusamus ducimus dignissimos, sit
            deleniti excepturi quae ullam quam? Corporis asperiores velit
            pariatur doloribus distinctio quis. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Corrupti a ab incidunt error dolor
            explicabo assumenda culpa cum iste nostrum nam, recusandae dicta sit
            voluptate repellat consequuntur reprehenderit necessitatibus
            tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni quod unde officiis eaque itaque, illum cupiditate recusandae
            quo excepturi sapiente quam repellendus sit magnam. Laborum
            quibusdam quia ullam blanditiis quas! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veniam, ab totam illum impedit magnam
            fuga? Ullam fugit consectetur voluptates cumque accusamus est quia
            quasi. Ipsum ea similique autem hic repellendus?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s",}} >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s",}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s",}} >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{animationDelay: "1s",}} >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
