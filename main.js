document.addEventListener('DOMContentLoaded', () => {

    /* Definiendo las capitales que voy a mostrar*/
    const capitals = [
        {
            cca3: "FRA",
            image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "GBR",
            image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "JPN",
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            cca3: "ITA",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "DEU",
            image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            cca3: "ESP",
            image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "USA",
            image: "https://images.unsplash.com/photo-1552337125-0c43e12efec0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            cca3: "CHN",
            image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "RUS",
            image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        },
        {
            cca3: "MEX",
            image: "https://images.unsplash.com/photo-1717388835452-c9c8cda0002e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            cca3: "IND",
            image: "https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            cca3: "AUS",
            image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];
    
    /* Obteniendo los paises que voy a mostrar desde la API */
  
    const getCountrys = async () => {
        const url = 'https://restcountries.com/v3.1/all';
        const response = await fetch(url);
        let data = await response.json();

        const codes = capitals.map(capital => capital.cca3);
        const filterCountrys = data.filter(country => codes.includes(country.cca3));

        console.log(filterCountrys);
        return filterCountrys;
    };

    /* Mostrando los paises que voy obteniendo */

    const displayCountries = (countries) => {
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = '';

        countries.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.className = 'country-card';

            const capitalInfo = capitals.find(capital => capital.cca3 === country.cca3);
            const [lat, lng] = country.latlng;


            countryCard.innerHTML = `
                <div class="header-card">
                    <img src="${country.flags.png}" alt="Bandera de ${country.name.common}" class="flag">

                </div>
                
                <div class="main-card">
                    <div class="info-section">
                        <div class="info-item">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                            </svg>
                            <p><strong>Capital:</strong> ${country.capital[0]}</p>
                        </div>

                        <div class="info-item">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                            </svg>
                            <p><strong>Ubicación:</strong> ${lat.toFixed(2)}, ${lng.toFixed(2)}</p>
                        </div>
                    </div>
                    <img src="${capitalInfo.image}" alt="Capital de ${country.capital[0]}" class="capital-image">
                </div>
                
                <div class="footer-card">
                    <p><strong>Código de país:</strong> ${country.cca3}</p>
                </div>
                <div class="button">
                    <button class="button-card" data-cca3="${country.cca3}">${country.name.common}</button>
                </div>
            `;

            mainContent.appendChild(countryCard);
        });

        // Botones
        const buttons = document.querySelectorAll('.button-card');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const cca3 = button.getAttribute('data-cca3');
                const country = countries.find(country => country.cca3 === cca3);
                const capitalInfo = capitals.find(capital => capital.cca3 === cca3);

                // Modal
                const modal = document.querySelector('.modal');
                const modalTitle = modal.querySelector('.modal-title');
                
                const modalInfo = modal.querySelector('.modal-info');



                if (modal && modalTitle  && modalInfo) {
                    const nombrePais = country.name.common.toLowerCase();
                    const nombreCapital = country.capital[0].toLowerCase();

                    modalTitle.textContent = `Capital de ${nombrePais}`;
                    
                    modalInfo.textContent = `La capital de ${nombrePais} es ${nombreCapital}, ubicada en las coordenadas ${country.latlng[0].toFixed(2)}, ${country.latlng[1].toFixed(2)}.`;
                    modal.style.display = 'inline-grid';
                } else {
                    console.error("No se encontraron los elementos del modal.");
                }
            });
        });

      
                // Cerrar Modal
        window.addEventListener('click', (event) => {
            const modal = document.querySelector('.modal');
            if (event.target === modal) { 
                modal.style.display = 'none';
            }
        });

        
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = document.querySelector('.modal');
                    modal.classList.add('active');
                });
            });

            const closeButton = document.querySelector('.close');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    const modal = document.querySelector('.modal');
                    modal.classList.remove('active');
                });
            }

            // Cerrar el modal al hacer clic fuera del contenido
            window.addEventListener('click', (event) => {
                const modal = document.querySelector('.modal');
                if (event.target === modal) {
                    modal.classList.remove('active');
    }
});


    };

    

    getCountrys()
        .then(countries => {
            displayCountries(countries);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});