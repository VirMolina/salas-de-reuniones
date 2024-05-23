$(document).ready(function(){
    $("#flexiselDemo3").flexisel({
        visibleItems: 5,
        animationSpeed: 1500,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });

    $("#flexiseltira").flexisel({
        visibleItems: 7,
        animationSpeed: 1500,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 2
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 800
    });

    $(".py1").on('click', function(event) {
        event.preventDefault();
        $(".tv01").html("<i>Rincones de enfoque</i>");
        $(".tv02").html("<i>Ambientes de colaboración</i>");
        $(".tv03").html("<i>Salas de conferencias</i>");
        $(".tv04").html("<i>Espacios dinámicos</i>");
        $(".mx01").html("Son ideales para realizar llamadas privadas o concentrarse en tareas que requieren silencio y privacidad, como videoconferencias o reuniones telefónicas importantes.");
        $(".mx02").html("Perfectos para charlas rápidas, discusiones espontáneas o encuentros improvisados, promoviendo la interacción entre los miembros del equipo y favoreciendo la comunicación abierta.");
        $(".mx03").html("Esenciales para encuentros más estructurados, presentaciones formales, discusiones estratégicas y toma de decisiones importantes que requieren un entorno más privado y equipado.");
        $(".mx04").html("Diseñados para inspirar la creatividad, facilitar la colaboración entre equipos y adaptarse a diferentes necesidades, permitiendo configuraciones personalizadas según el tipo de proyecto o actividad que se esté realizando.");
        $('.img-push').attr('src','images/seguridad-01.png');
        $('.img-push-hover').attr('src','images/seguridad-01-hover.png');
        $('.img-push2').attr('src','images/seguridad-02.png');
        $('.img-push-hover2').attr('src','images/seguridad-02-hover.png');
        $('.img-push3').attr('src','images/seguridad-03.png');
        $('.img-push-hover3').attr('src','images/seguridad-03-hover.png');
        $('.img-push-hover4').attr('src','images/seguridad-04-hover.png');
        $('.triangulito').hide(); $('.tri1').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#00923f");
        $(this).css("border", "2px solid #00923f");
        $(this).css("color", "white");
    });
    $(".py2").on('click', function(event) {
        event.preventDefault();
        $(".tv01").html("<i>Videoconferencia</i>");
        $(".tv02").html("<i>Gestión y control</i>");
        $(".tv03").html("<i>Pantallas interactivas</i>");
        $(".tv04").html("<i>Audio inmersivo</i>");
        $(".mx01").html("Soluciones tecnológicas centradas en las personas que ayudan a los equipos a crear y colaborar de manera eficaz desde cualquier lugar. Dispositivos con control y precisión, y con características innovadoras que agilizan los flujos de trabajo, logrando la excelencia.");
        $(".mx02").html("La centralización de la tecnología en un sistema único ofrece numerosos beneficios en términos de eficiencia y facilidad de gestión. Permite monitorear, mantener y administrar de forma más efectiva los recursos tecnológicos, proporcionando una visión global y simplificando la gestión diaria de las operaciones.");
        $(".mx03").html("Equipos 4K, superficies transparentes, monitores de tamaños especiales, etc. Poseen funciones que facilitan la colaboración: variedad de conexiones, varios participantes a la vez, escritura sobre la imagen, compartir información digitalmente, etc. Realizamos el diseño y la producción de contenidos especiales.");
        $(".mx04").html("Sistemas de audio que garantizan la mejor reproducción de cualquier medio, refuerzo de voz y microfonía específica para audio o videoconferencia, mood music o sonorización de grandes espacios.");
        $('.img-push').attr('src','images/seguridad-04.png');
        $('.img-push-hover').attr('src','images/seguridad-04-hover.png');
        $('.img-push2').attr('src','images/seguridad-05.png');
        $('.img-push-hover2').attr('src','images/seguridad-05-hover.png');
        $('.img-push3').attr('src','images/seguridad-06.png');
        $('.img-push-hover3').attr('src','images/seguridad-06-hover.png');
        $('.triangulito').hide(); $('.tri2').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#00923f");
        $(this).css("border", "2px solid #00923f");
        $(this).css("color", "white");
    });
    $(".py3").on('click', function(event) {
        event.preventDefault();
        $(".ptit").html("<i>CARTELERÍA</i>");
        $(".pdesc").html("Brindamos la tecnología necesaria para generar señalética que favorezca la comunicación entre los sectores de la empresa, acorde a su estética e integrada en el diseño de los espacios. La cartería también es ideal para espacios de acceso al público, ya que permite mostrar contenido digital, más atractivo para los usuarios.");
        $('.img-p').attr('src','images/carteleria.jpg');
        $('.triangulito').hide(); $('.tri3').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#25326b");
        $(this).css("border", "2px solid #25326b");
        $(this).css("color", "white");
    });
    $(".py4").on('click', function(event) {
        event.preventDefault();
        $(".ptit").html("<i>SOLUCIONES ESPECIALES</i>");
        $(".pdesc").html("Diseño de contenido, producción artística, desarrollos interactivos y técnica integral puesta al servicio de la comunicación y la generación de experiencias. Plasmamos los proyectos más creativos consiguiendo que la tecnología materialice sus ideas.");
        $('.img-p').attr('src','images/soluciones.jpg');
        $('.triangulito').hide(); $('.tri4').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#25326b");
        $(this).css("border", "2px solid #25326b");
        $(this).css("color", "white");
    });
    $(".py5").on('click', function(event) {
        event.preventDefault();
        $(".ptit").html("<i>EVENTOS</i>");
        $(".pdesc").html("Realizamos eventos de primer nivel internacional, brindando apoyo en materia de tecnología, producción integral, sonido, imagen, iluminación, y soluciones interactivas para lograr el más alto estándar de excelencia en cada uno de los proyectos en los que orgullosamente participamos.  Tenemos personal técnico bilingüe, altamente capacitado y con amplia experiencia en la operación de sistemas digitales de audio, video y proyección.");
        $('.img-p').attr('src','images/eventos.jpg');
        $('.triangulito').hide(); $('.tri5').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#25326b");
        $(this).css("border", "2px solid #25326b");
        $(this).css("color", "white");
    });
    $(".py6").on('click', function(event) {
        event.preventDefault();
        $(".ptit").html("<i>SUM Y AUDITORIOS</i>");
        $(".pdesc").html("Desarrollamos salas de gran tamaño como salas de capacitación componible, auditorios, SUM, etc., integrando la tecnología que requieran dentro de un mismo sistema donde cada herramienta funcione como un conjunto perfectamente articulado. Nuestro equipo está capacitado para brindar la mejor solución.");
        $('.img-p').attr('src','images/sum.jpg');
        $('.triangulito').hide(); $('.tri6').show();
        $('#productos .boton_menu').css("background-color", "#ede8d5");
        $('#productos .boton_menu').css("border", "2px solid #ede8d5");
        $('#productos .boton_menu').css("color", "#373f50");
        $(this).css("background-color", "#25326b");
        $(this).css("border", "2px solid #25326b");
        $(this).css("color", "white");
    });


    $(".s1").mouseenter(function(){
        $(".d1").fadeIn("slow");
        $(".s11").css("height","100%");
    });
    $(".s1").mouseleave(function(){
        $(".d1").fadeOut("slow",function(){
            $(".s11").css("height","auto");
        });
    });
    $(".s2").mouseenter(function(){
        $(".d2").fadeIn("slow");
        $(".s22").css("height","100%");
    });
    $(".s2").mouseleave(function(){
        $(".d2").fadeOut("slow",function(){
            $(".s22").css("height","auto");
        });
    });
    $(".s3").mouseenter(function(){
        $(".d3").fadeIn("slow");
        $(".s33").css("height","100%");
    });
    $(".s3").mouseleave(function(){
        $(".d3").fadeOut("slow",function(){
            $(".s33").css("height","auto");
        });
    });
    $(".s4").mouseenter(function(){
        $(".d4").fadeIn("slow");
        $(".s44").css("height","100%");
    });
    $(".s4").mouseleave(function(){
        $(".d4").fadeOut("slow",function(){
            $(".s44").css("height","auto");
        });
    });
});
