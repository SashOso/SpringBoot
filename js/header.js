function LoadSidebar(){
    const sidebar_html=`
        <ul>
            <li><a href="index.html">
                <i class="fa-solid fa-house"></i>
                <span>Inicio</span>
            </a></li>

            <li><a href="entity.html">
                <i class="fa-solid fa-database"></i>
                <span>Entity</span>
            </a></li>

            <li><a href="repository.html">
                <i class="fa-solid fa-box-archive"></i>
                <span>Repository</span>
            </a></li>

            <li><a href="service.html">
                <i class="fa-solid fa-gears"></i>
                <span>Service</span>
            </a></li>

            <li><a href="controller.html">
                <i class="fa-solid fa-diagram-project"></i>
                <span>Controller</span>
            </a></li>

            <li><a href="segurity.html">
                <i class="fa-solid fa-shield-halved"></i>
                <span>Segurity</span>
            </a></li>

            <li><a href="export.html">
                <i class="fa-solid fa-box"></i>
                <span>Exportar</span>
            </a></li>

            <li><a href="vsc.html">
                <i class="fa-brands fa-microsoft"></i>
                <span>Visual Studio Code</span>
            </a></li>

        </ul>
    `;
    document.querySelector(".sidebar").innerHTML=sidebar_html
}

LoadSidebar()