import '../cssComponents/cssCardsHover.css'
import React from "react";
const CardsHover = () => {
    return (
      <div class="container__card">

      <div class="card__father">
          <div class="card">
              <div class="card__front">
                  <div class="bg"></div>
                  <div class="body__card_front">
                      <h1 className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, omnis.</h1>
                  </div>
              </div>
              <div class="card__back">
                  <div class="body__card_back">
                      <h1 className='h1CardsHover'>servicio 1</h1>
                      <p className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab quas recusandae voluptatum aliquid tempore animi corporis voluptas. Tempore neque iure necessitatibus voluptas nesciunt animi dolores incidunt delectus sapiente illum.</p>
                      <input type="button" value="Leer Más"/>
                  </div>
              </div>
          </div>
      </div>

      <div class="card__father">
          <div class="card">
              <div class="card__front">
                  <div class="bg"></div>
                  <div class="body__card_front">
                      <h1 className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, omnis.</h1>
                  </div>
              </div>
              <div class="card__back">
                  <div class="body__card_back">
                      <h1 className='h1CardsHover'>servicio 2</h1>
                      <p className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab quas recusandae voluptatum aliquid tempore animi corporis voluptas. Tempore neque iure necessitatibus voluptas nesciunt animi dolores incidunt delectus sapiente illum.</p>
                      <input type="button" value="Leer Más"/>
                  </div>
              </div>
          </div>
      </div>

      <div class="card__father">
          <div class="card">
              <div class="card__front">
                  <div class="bg"></div>
                  <div class="body__card_front">
                      <h1 className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, omnis.</h1>
                  </div>
              </div>
              <div class="card__back">
                  <div class="body__card_back">
                      <h1 className='h1CardsHover'>servicio 3</h1>
                      <p className='h1CardsHover'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab quas recusandae voluptatum aliquid tempore animi corporis voluptas. Tempore neque iure necessitatibus voluptas nesciunt animi dolores incidunt delectus sapiente illum.</p>
                      <input type="button" value="Leer Más"/>
                  </div>
              </div>
          </div>
      </div>

  </div>
    );
};
export default CardsHover