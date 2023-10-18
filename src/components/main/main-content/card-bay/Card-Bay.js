import React from 'react';
import '../../../../assets/scss/main-content.scss';

const CardBay = () => {
  const fakeArray = [
    {
      id: 1, title: "Lustres", uri: require('../../../../assets/images/main/card-bay/1.png'), subtitle: (
        <span>
          Lustre suspenso <br /> rústico
        </span>
      )
    },
    {
      id: 2, title: "Lâmpadas", uri: require('../../../../assets/images/main/card-bay/2.png'), subtitle: (
        <span>
          Lâmpada <br />
        </span>
      )
    },
    {
      id: 3, title: "Acessórios", uri: require('../../../../assets/images/main/card-bay/3.png'),
      subtitle: (
        <span>
          Lustre suspenso<br />rústico
        </span>
      )


    },
    {
      id: 4, title: "Utensílios domésticos", uri: require('../../../../assets/images/main/card-bay/4.png'),
      subtitle: (
        <span>
          Kit de ferramentas
        </span>
      )
    },
    {
      id: 5, title: "Acessórios", uri: require('../../../../assets/images/main/card-bay/5.png'),
      subtitle: (
        <span>
          Garfos de <br />mesa inox
        </span>
      )
    },
    {
      id: 6, title: "Utensílios domésticos", uri: require('../../../../assets/images/main/card-bay/6.png'),
      subtitle: (
        <span>
          Lustre suspenso <br />rústico
        </span>
      )
    },
    {
      id: 7, title: "Ferramentas", uri: require('../../../../assets/images/main/card-bay/7.png'),
      subtitle: (
        <span>
          Ventilador 2 em 1,<br /> mesa e parede
        </span>
      )
    },
    {
      id: 8, title: "Acessórios", uri: require('../../../../assets/images/main/card-bay/8.png'),
      subtitle: (
        <span>
          Lustre suspenso <br /> rústico
        </span>
      )

    },
  ];

  // Divide o array em duas partes
  const firstRow = fakeArray.slice(0, 4);
  const secondRow = fakeArray.slice(4);

  return (
<>
<div className="card-bay">
      <div className="card-row">
        {firstRow.map((item) => (
         <div className="card" key={item.id}>
         <div className="left-div">
         <div className="text">{item.title}</div>
           <h1 className="subtitle">{item.subtitle}</h1>
           <div className="container-price">
             <div className="subdiv"><h5>R$ 1.500,00</h5></div>
             <div className="subdiv2"><h5>R$ 1.000,00</h5></div>
           </div>

         </div>
         <img src={item.uri} alt={item.title} style={{ height: 216, width: '100%' }} />
         <div className="divison"></div>
         <div className="container-footer">
           <h5>
             ou em 3x de R$ 333,33
           </h5>
         </div>
       </div>
        ))}
      </div>

      <div className="card-row">
        {secondRow.map((item) => (
          <div className="card" key={item.id}>
            <div className="left-div">
              <div className="text">{item.title}</div>
              <h1 className="subtitle">{item.subtitle}</h1>
              <div className="container-price">
                <div className="subdiv"><h5>R$ 1.500,00</h5></div>
                <div className="subdiv2"><h5>R$ 1.000,00</h5></div>
              </div>

            </div>
            <img src={item.uri} alt={item.title} style={{ height: 216, width: '100%' }} />
            <div className="divison"></div>
            <div className="container-footer">
              <h5>
                ou em 3x de R$ 333,33
              </h5>
            </div>
          </div>
        ))}

      </div>

    </div>
   
</>
  );
};

export default CardBay;
