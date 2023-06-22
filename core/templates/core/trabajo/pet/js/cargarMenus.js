async function loadHTMLComponents() {
    const menuAnonElement = document.querySelector("#menuAnon");
    const menuUserElement = document.querySelector("#menuUser");
    const menuAdminElement = document.querySelector("#menuAdmin");
    const footerElement = document.querySelector("#footer");

    const loadComponent = (element, url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    element.innerHTML = this.responseText;
                    resolve();
                } else if (this.readyState === 4) {
                    reject(new Error(`Error al cargar el componente desde ${url}`));
                }
            };
            xhr.open("GET", url, true);
            xhr.send();
        });
    };

    if (menuAnonElement) {
        await loadComponent(menuAnonElement, "../menusAndFooter/menuAnon.html");
    }

    if (menuUserElement) {
        await loadComponent(menuUserElement, "../menusAndFooter/menuUser.html")
            .then(() => {
              
                
                    const carritoNav = document.getElementById('carritoNav');
                    const carritoContenedor = document.getElementById('carritoContenedor');
                    console.log('hola mundo');
                    carritoNav.addEventListener('click', function () {
                      if (carritoContenedor.style.display === 'none') {
                        carritoContenedor.style.display = 'block';
                      } else {
                        carritoContenedor.style.display = 'none';
                      }
                    });
                    // const contenidoWeb = document.querySelector('body');
                    // contenidoWeb.addEventListener('click', () => {
                    // carritoContenedor.style.display = 'none';
                    // });
                  
            });
    }

    if (menuAdminElement) {
        await loadComponent(menuAdminElement, "../menusAndFooter/menuAdmin.html");
    }

    if (footerElement) {
        await loadComponent(footerElement, "../menusAndFooter/footer.html");
    }
}

// Ejecuta la función cuando se carga la página.
document.addEventListener("DOMContentLoaded", loadHTMLComponents);