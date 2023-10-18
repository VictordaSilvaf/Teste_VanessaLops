import React, { useState } from 'react';
import '../../../assets/scss/category-item.scss';

const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fakeArray = [
    {
      id: 1, title: "Lustres", uri: require('../../../assets/images/main/card-bay/1.png'), subtitle: (
        <span>
          Lustre suspenso <br /> rústico
        </span>
      )
    },
    {
      id: 2, title: "Lâmpadas", uri: require('../../../assets/images/main/card-bay/2.png'), subtitle: (
        <span>
          Lâmpada <br />
        </span>
      )
    },
    {
      id: 3, title: "Acessórios", uri: require('../../../assets/images/main/card-bay/3.png'),
      subtitle: (
        <span>
          Lustre suspenso<br />rústico
        </span>
      )


    },
    {
      id: 4, title: "Utensílios domésticos", uri: require('../../../assets/images/main/card-bay/4.png'),
      subtitle: (
        <span>
          Kit de ferramentas
        </span>
      )
    },
    {
      id: 5, title: "Acessórios", uri: require('../../../assets/images/main/card-bay/5.png'),
      subtitle: (
        <span>
          Garfos de <br />mesa inox
        </span>
      )
    },
    {
      id: 6, title: "Utensílios domésticos", uri: require('../../../assets/images/main/card-bay/6.png'),
      subtitle: (
        <span>
          Lustre suspenso <br />rústico
        </span>
      )
    },
    {
      id: 7, title: "Ferramentas", uri: require('../../../assets/images/main/card-bay/7.png'),
      subtitle: (
        <span>
          Ventilador 2 em 1,<br /> mesa e parede
        </span>
      )
    },
    {
      id: 8, title: "Acessórios", uri: require('../../../assets/images/main/card-bay/8.png'),
      subtitle: (
        <span>
          Lustre suspenso <br /> rústico
        </span>
      )

    },
  ];


  return (
    <div className={`dropdownItem ${isOpen ? 'active' : 'inactive'}`}>
      {
        fakeArray.map((item) => {
          return (
            <div className="custom-div">
              <div className='div-row'>
                <div className='div-row-custon' style={{ backgroundImage: `url(${item.uri})` }}>
                </div>
              </div>

              <div className='div-text'>

                <h5> {item.title}</h5>
              </div>
              <div>

              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default DropMenu;
