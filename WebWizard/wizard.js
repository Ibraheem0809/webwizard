let firstRight = document.querySelector(".firstRight");
let firstSection = document.querySelector(".firstSection");


firstRight.addEventListener("click",()=>{
    firstSection.innerHTML=`
                    <div class="hiddenContent">
                        <br>
                        <h1><span>SOS Sarthi</span></h1>
                        <br>
                        <p>A device installed in vehicles that automatically detects accidents and contacts to emergency services.</p>
                        <br>
                        <h3><span>Features of SOS Sarthi</span></h3>
                        <p> => Real time accident detection.</p>
                        <p> => Automatic calling to emergency number.</p>
                        <p> => Location Tracking to quick response.</p>
                        <br>
                        <h3>PARA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sunt atque quibusdam iusto totam ipsa accusamus laboriosam culpa</p><p> incidunt eos deserunt pariatur, qui, nam fuga cum! Vero, eveniet! Nemo laboriosam molestiae illum at asperiores</p><p> autem sapiente dignissimos hic. Hic accusantium optio perferendis fuga ea debitis autem dicta saepe beatae ut.</p>
                        <br>
                        <ul>
                        <h3>Object Used</h3>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </div>`;
})