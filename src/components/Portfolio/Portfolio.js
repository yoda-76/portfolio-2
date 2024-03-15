import React from "react";
import "./Portfolio.css";
import IMG1 from "../../asset/image1.png";
import IMG2 from "../../asset/image2.jpeg";
import IMG3 from "../../asset/image3.png";


export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5 className="text-[2rem]">My Recent Work</h5>
      <h2 className="text-[4rem]">Portfolio</h2>

      <div className="portfolio__container container flex items-center jsutify-center px-4">
        <article className="portfolio__item gap-4 flex-col flex rounded-2xl">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>DevsClash</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/yoda-76/CodeClash" className="btn px-10 py-4">
              Github
            </a>
            <a href="https://www.devsclash.com/" className="btn px-10 py-4 btn-primary">
              Live Demo
            </a>
          </div>
        </article>


        <article className="portfolio__item gap-4 flex-col flex rounded-2xl">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Upstox API Bridge</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/yoda-76/upstox-scalper-1" className="btn px-10 py-4">
              Github
            </a>
            <a href="https://upstox-scalper-2.vercel.app/" className="btn px-10 py-4 btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
