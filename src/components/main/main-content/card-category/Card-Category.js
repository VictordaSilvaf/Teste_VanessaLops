import React from 'react';
import '../../../../assets/scss/card-category.scss';
import MainFooter from '../../main-footer/Main-Footer';

const CardCategory = () => {
    const fakeArray = [
        {
            id: 1, title: "Lustres", uri: require('../../../../assets/images/main/card-category/1.png'), subtitle: (
                <span>
                    Lustre suspenso <br /> rústico
                </span>
            )
        },
        {
            id: 2, title: "Lâmpadas", uri: require('../../../../assets/images/main/card-category/2.png'), subtitle: (
                <span>
                    Lâmpada <br />
                </span>
            )
        },
        {
            id: 3, title: "Acessórios", uri: require('../../../../assets/images/main/card-category/3.png'),
            subtitle: (
                <span>
                    Lustre suspenso<br />rústico
                </span>
            )


        },
        {
            id: 4, title: "Utensílios domésticos", uri: require('../../../../assets/images/main/card-category/4.png'),
            subtitle: (
                <span>
                    Kit de<br />ferramentas
                </span>
            )
        },
        {
            id: 5, title: "Acessórios", uri: require('../../../../assets/images/main/card-category/5.png'),
            subtitle: (
                <span>
                    Garfos de <br />mesa inox
                </span>
            )
        },
        {
            id: 6, title: "Utensílios domésticos", uri: require('../../../../assets/images/main/card-category/6.png'),
            subtitle: (
                <span>
                    Lustre suspenso <br />rústico
                </span>
            )
        },
        {
            id: 7, title: "Ferramentas", uri: require('../../../../assets/images/main/card-category/7.png'),
            subtitle: (
                <span>
                    Ventilador 2 em 1,<br /> mesa e parede
                </span>
            )
        },
        {
            id: 8, title: "Acessórios", uri: require('../../../../assets/images/main/card-category/8.png'),
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
        <div className='container-category'>
            <div>
                <div className='container-c'>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6905 46.8254C42.7449 46.8254 46.0317 43.5386 46.0317 39.4841C46.0317 35.4296 42.7449 32.1428 38.6905 32.1428C34.636 32.1428 31.3492 35.4296 31.3492 39.4841C31.3492 43.5386 34.636 46.8254 38.6905 46.8254ZM38.6905 48.4127C43.6216 48.4127 47.619 44.4152 47.619 39.4841C47.619 34.553 43.6216 30.5555 38.6905 30.5555C33.7594 30.5555 29.7619 34.553 29.7619 39.4841C29.7619 44.4152 33.7594 48.4127 38.6905 48.4127Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5159 46.8254C64.5703 46.8254 67.8571 43.5386 67.8571 39.4841C67.8571 35.4296 64.5703 32.1428 60.5159 32.1428C56.4614 32.1428 53.1746 35.4296 53.1746 39.4841C53.1746 43.5386 56.4614 46.8254 60.5159 46.8254ZM60.5159 48.4127C65.447 48.4127 69.4444 44.4152 69.4444 39.4841C69.4444 34.553 65.447 30.5555 60.5159 30.5555C55.5847 30.5555 51.5873 34.553 51.5873 39.4841C51.5873 44.4152 55.5847 48.4127 60.5159 48.4127Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5159 24.6032C63.4745 24.6032 65.873 22.2047 65.873 19.2461C65.873 16.2874 63.4745 13.8889 60.5159 13.8889C57.5572 13.8889 55.1587 16.2874 55.1587 19.2461C55.1587 22.2047 57.5572 24.6032 60.5159 24.6032ZM60.5159 26.1905C64.3512 26.1905 67.4603 23.0814 67.4603 19.2461C67.4603 15.4108 64.3512 12.3016 60.5159 12.3016C56.6805 12.3016 53.5714 15.4108 53.5714 19.2461C53.5714 23.0814 56.6805 26.1905 60.5159 26.1905Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7143 6.34921C62.0292 6.34921 63.0952 5.28322 63.0952 3.96825C63.0952 2.65329 62.0292 1.5873 60.7143 1.5873C59.3993 1.5873 58.3333 2.65329 58.3333 3.96825C58.3333 5.28322 59.3993 6.34921 60.7143 6.34921ZM60.7143 7.93651C62.9059 7.93651 64.6825 6.15986 64.6825 3.96825C64.6825 1.77665 62.9059 0 60.7143 0C58.5226 0 56.746 1.77665 56.746 3.96825C56.746 6.15986 58.5226 7.93651 60.7143 7.93651Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.7143 98.4127C62.0292 98.4127 63.0952 97.3467 63.0952 96.0317C63.0952 94.7168 62.0292 93.6508 60.7143 93.6508C59.3993 93.6508 58.3333 94.7168 58.3333 96.0317C58.3333 97.3467 59.3993 98.4127 60.7143 98.4127ZM60.7143 100C62.9059 100 64.6825 98.2233 64.6825 96.0317C64.6825 93.8401 62.9059 92.0635 60.7143 92.0635C58.5226 92.0635 56.746 93.8401 56.746 96.0317C56.746 98.2233 58.5226 100 60.7143 100Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58732 61.1111C1.58732 62.426 2.65331 63.492 3.96827 63.492C5.28323 63.492 6.34922 62.426 6.34922 61.1111C6.34922 59.7961 5.28323 58.7301 3.96827 58.7301C2.65331 58.7301 1.58732 59.7961 1.58732 61.1111ZM1.6039e-05 61.1111C1.59432e-05 63.3027 1.77666 65.0793 3.96827 65.0793C6.15988 65.0793 7.93652 63.3027 7.93652 61.1111C7.93652 58.9195 6.15988 57.1428 3.96827 57.1428C1.77666 57.1428 1.61348e-05 58.9195 1.6039e-05 61.1111Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.8571 61.5079C92.8571 62.8229 93.9231 63.8889 95.2381 63.8889C96.553 63.8889 97.619 62.8229 97.619 61.5079C97.619 60.193 96.553 59.127 95.2381 59.127C93.9231 59.127 92.8571 60.193 92.8571 61.5079ZM91.2698 61.5079C91.2698 63.6995 93.0465 65.4762 95.2381 65.4762C97.4297 65.4762 99.2063 63.6995 99.2063 61.5079C99.2063 59.3163 97.4297 57.5397 95.2381 57.5397C93.0465 57.5397 91.2698 59.3163 91.2698 61.5079Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8889 6.34921C40.2038 6.34921 41.2698 5.28322 41.2698 3.96825C41.2698 2.65329 40.2038 1.5873 38.8889 1.5873C37.5739 1.5873 36.5079 2.65329 36.5079 3.96825C36.5079 5.28322 37.5739 6.34921 38.8889 6.34921ZM38.8889 7.93651C41.0805 7.93651 42.8571 6.15986 42.8571 3.96825C42.8571 1.77665 41.0805 0 38.8889 0C36.6973 0 34.9206 1.77665 34.9206 3.96825C34.9206 6.15986 36.6973 7.93651 38.8889 7.93651Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8889 98.4127C40.2038 98.4127 41.2698 97.3467 41.2698 96.0317C41.2698 94.7168 40.2038 93.6508 38.8889 93.6508C37.5739 93.6508 36.5079 94.7168 36.5079 96.0317C36.5079 97.3467 37.5739 98.4127 38.8889 98.4127ZM38.8889 100C41.0805 100 42.8571 98.2233 42.8571 96.0317C42.8571 93.8401 41.0805 92.0635 38.8889 92.0635C36.6973 92.0635 34.9206 93.8401 34.9206 96.0317C34.9206 98.2233 36.6973 100 38.8889 100Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58732 39.2858C1.58732 40.6007 2.65331 41.6667 3.96827 41.6667C5.28323 41.6667 6.34922 40.6007 6.34922 39.2858C6.34922 37.9708 5.28323 36.9048 3.96827 36.9048C2.65331 36.9048 1.58732 37.9708 1.58732 39.2858ZM1.6039e-05 39.2858C1.59432e-05 41.4774 1.77666 43.254 3.96827 43.254C6.15988 43.254 7.93652 41.4774 7.93652 39.2858C7.93652 37.0942 6.15988 35.3175 3.96827 35.3175C1.77666 35.3175 1.61348e-05 37.0942 1.6039e-05 39.2858Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M92.8571 39.2858C92.8571 40.6007 93.9231 41.6667 95.2381 41.6667C96.553 41.6667 97.619 40.6007 97.619 39.2858C97.619 37.9708 96.553 36.9048 95.2381 36.9048C93.9231 36.9048 92.8571 37.9708 92.8571 39.2858ZM91.2698 39.2858C91.2698 41.4774 93.0465 43.254 95.2381 43.254C97.4297 43.254 99.2063 41.4774 99.2063 39.2858C99.2063 37.0942 97.4297 35.3175 95.2381 35.3175C93.0465 35.3175 91.2698 37.0942 91.2698 39.2858Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5159 86.5079C63.4745 86.5079 65.873 84.1094 65.873 81.1507C65.873 78.1921 63.4745 75.7936 60.5159 75.7936C57.5572 75.7936 55.1587 78.1921 55.1587 81.1507C55.1587 84.1094 57.5572 86.5079 60.5159 86.5079ZM60.5159 88.0952C64.3512 88.0952 67.4603 84.9861 67.4603 81.1507C67.4603 77.3154 64.3512 74.2063 60.5159 74.2063C56.6805 74.2063 53.5714 77.3154 53.5714 81.1507C53.5714 84.9861 56.6805 88.0952 60.5159 88.0952Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2063 39.4841C24.2063 36.5255 21.8079 34.127 18.8492 34.127C15.8905 34.127 13.4921 36.5255 13.4921 39.4841C13.4921 42.4428 15.8905 44.8413 18.8492 44.8413C21.8079 44.8413 24.2063 42.4428 24.2063 39.4841ZM25.7936 39.4841C25.7936 35.6488 22.6845 32.5397 18.8492 32.5397C15.0139 32.5397 11.9048 35.6488 11.9048 39.4841C11.9048 43.3195 15.0139 46.4286 18.8492 46.4286C22.6845 46.4286 25.7936 43.3195 25.7936 39.4841Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.7143 39.4841C85.7143 36.5255 83.3158 34.127 80.3572 34.127C77.3985 34.127 75 36.5255 75 39.4841C75 42.4428 77.3985 44.8413 80.3572 44.8413C83.3158 44.8413 85.7143 42.4428 85.7143 39.4841ZM87.3016 39.4841C87.3016 35.6488 84.1925 32.5397 80.3572 32.5397C76.5219 32.5397 73.4127 35.6488 73.4127 39.4841C73.4127 43.3195 76.5219 46.4286 80.3572 46.4286C84.1925 46.4286 87.3016 43.3195 87.3016 39.4841Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.7143 19.246C85.7143 16.2873 83.3158 13.8888 80.3572 13.8888C77.3985 13.8888 75 16.2873 75 19.246C75 22.2047 77.3985 24.6031 80.3572 24.6031C83.3158 24.6031 85.7143 22.2047 85.7143 19.246ZM87.3016 19.246C87.3016 15.4107 84.1925 12.3015 80.3572 12.3015C76.5219 12.3015 73.4127 15.4107 73.4127 19.246C73.4127 23.0813 76.5219 26.1904 80.3572 26.1904C84.1925 26.1904 87.3016 23.0813 87.3016 19.246Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.7143 81.1508C85.7143 78.1921 83.3158 75.7936 80.3572 75.7936C77.3985 75.7936 75 78.1921 75 81.1508C75 84.1094 77.3985 86.5079 80.3572 86.5079C83.3158 86.5079 85.7143 84.1094 85.7143 81.1508ZM87.3016 81.1508C87.3016 77.3155 84.1925 74.2063 80.3572 74.2063C76.5219 74.2063 73.4127 77.3155 73.4127 81.1508C73.4127 84.9861 76.5219 88.0952 80.3572 88.0952C84.1925 88.0952 87.3016 84.9861 87.3016 81.1508Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2063 81.1508C24.2063 78.1921 21.8079 75.7936 18.8492 75.7936C15.8905 75.7936 13.4921 78.1921 13.4921 81.1508C13.4921 84.1094 15.8905 86.5079 18.8492 86.5079C21.8079 86.5079 24.2063 84.1094 24.2063 81.1508ZM25.7936 81.1508C25.7936 77.3155 22.6845 74.2063 18.8492 74.2063C15.0139 74.2063 11.9048 77.3155 11.9048 81.1508C11.9048 84.9861 15.0139 88.0952 18.8492 88.0952C22.6845 88.0952 25.7936 84.9861 25.7936 81.1508Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2063 19.246C24.2063 16.2873 21.8079 13.8888 18.8492 13.8888C15.8905 13.8888 13.4921 16.2873 13.4921 19.246C13.4921 22.2047 15.8905 24.6031 18.8492 24.6031C21.8079 24.6031 24.2063 22.2047 24.2063 19.246ZM25.7936 19.246C25.7936 15.4107 22.6845 12.3015 18.8492 12.3015C15.0139 12.3015 11.9048 15.4107 11.9048 19.246C11.9048 23.0813 15.0139 26.1904 18.8492 26.1904C22.6845 26.1904 25.7936 23.0813 25.7936 19.246Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6904 24.6032C41.6491 24.6032 44.0476 22.2047 44.0476 19.2461C44.0476 16.2874 41.6491 13.8889 38.6904 13.8889C35.7318 13.8889 33.3333 16.2874 33.3333 19.2461C33.3333 22.2047 35.7318 24.6032 38.6904 24.6032ZM38.6904 26.1905C42.5258 26.1905 45.6349 23.0814 45.6349 19.2461C45.6349 15.4108 42.5258 12.3016 38.6904 12.3016C34.8551 12.3016 31.746 15.4108 31.746 19.2461C31.746 23.0814 34.8551 26.1905 38.6904 26.1905Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6904 86.5079C41.6491 86.5079 44.0476 84.1094 44.0476 81.1507C44.0476 78.1921 41.6491 75.7936 38.6904 75.7936C35.7318 75.7936 33.3333 78.1921 33.3333 81.1507C33.3333 84.1094 35.7318 86.5079 38.6904 86.5079ZM38.6904 88.0952C42.5258 88.0952 45.6349 84.9861 45.6349 81.1507C45.6349 77.3154 42.5258 74.2063 38.6904 74.2063C34.8551 74.2063 31.746 77.3154 31.746 81.1507C31.746 84.9861 34.8551 88.0952 38.6904 88.0952Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2063 61.3095C24.2063 58.3508 21.8079 55.9523 18.8492 55.9523C15.8905 55.9523 13.4921 58.3508 13.4921 61.3095C13.4921 64.2681 15.8905 66.6666 18.8492 66.6666C21.8079 66.6666 24.2063 64.2681 24.2063 61.3095ZM25.7936 61.3095C25.7936 57.4742 22.6845 54.365 18.8492 54.365C15.0139 54.365 11.9048 57.4742 11.9048 61.3095C11.9048 65.1448 15.0139 68.2539 18.8492 68.2539C22.6845 68.2539 25.7936 65.1448 25.7936 61.3095Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.7143 61.3095C85.7143 58.3508 83.3158 55.9523 80.3572 55.9523C77.3985 55.9523 75 58.3508 75 61.3095C75 64.2681 77.3985 66.6666 80.3572 66.6666C83.3158 66.6666 85.7143 64.2681 85.7143 61.3095ZM87.3016 61.3095C87.3016 57.4742 84.1925 54.365 80.3572 54.365C76.5219 54.365 73.4127 57.4742 73.4127 61.3095C73.4127 65.1448 76.5219 68.2539 80.3572 68.2539C84.1925 68.2539 87.3016 65.1448 87.3016 61.3095Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5159 68.6508C64.5703 68.6508 67.8571 65.364 67.8571 61.3096C67.8571 57.2551 64.5703 53.9683 60.5159 53.9683C56.4614 53.9683 53.1746 57.2551 53.1746 61.3096C53.1746 65.364 56.4614 68.6508 60.5159 68.6508ZM60.5159 70.2381C65.447 70.2381 69.4444 66.2407 69.4444 61.3096C69.4444 56.3784 65.447 52.381 60.5159 52.381C55.5847 52.381 51.5873 56.3784 51.5873 61.3096C51.5873 66.2407 55.5847 70.2381 60.5159 70.2381Z" fill="#BDBDBD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6905 68.6508C42.7449 68.6508 46.0317 65.364 46.0317 61.3096C46.0317 57.2551 42.7449 53.9683 38.6905 53.9683C34.636 53.9683 31.3492 57.2551 31.3492 61.3096C31.3492 65.364 34.636 68.6508 38.6905 68.6508ZM38.6905 70.2381C43.6216 70.2381 47.619 66.2407 47.619 61.3096C47.619 56.3784 43.6216 52.381 38.6905 52.381C33.7594 52.381 29.7619 56.3784 29.7619 61.3096C29.7619 66.2407 33.7594 70.2381 38.6905 70.2381Z" fill="#BDBDBD" />
                        </g>
                    </svg>
                    <h2>CATEGORIAS</h2>

                    <div className='container-cards'>
                        {firstRow.map((item) => (
                            <>
                                <div className='category-card' key={item.id}>
                                    <h6>{item.title}</h6>
                                    <div className='category-card-item'>
                                        <img src={item.uri} alt={item.title} style={{ marginTop: 20 }} />
                                    </div>
                                </div>

                            </>
                        ))}

                    </div>
                    <div className='container-card'>
                        {secondRow.map((item) => (
                            <>
                                <div className='category-card' key={item.id}>
                                    <h6>{item.title}</h6>
                                    <div className='category-card-item'>
                                        <img src={item.uri} alt={item.title} style={{ marginTop: 20 }} />
                                    </div>
                                </div>

                            </>
                        ))}

                    </div>
                </div>


            </div>
        </div>
      
 </>
    );
};

export default CardCategory;
