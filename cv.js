$(document).ready(function() {

		/*PIECHART*/		
		google.charts.load('current', {'packages':['corechart']});
      	google.charts.setOnLoadCallback(drawChart);
      
      	function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Language', 'Hours per Day'],
          ['Spanish', 6],
          ['German', 4],
          ['English', 7]
        ]);

        var options = {
          title: 'My daily use of languages',
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
		
		 /*END PIE CHART*/

      /* MAP */
      	var locations = [
      ['Pflegewerk Senioren Centrum TurmStraße', 52.5288712, 13.3466107, 1],
      ['Faster Ibérica ETT', 36.7165444, -4.4233945, 2],
      ['Thailand', 13.725109, 100.3522234, 3],
      ['Laos', 17.9869243, 102.5612462, 4],
      ['Cambodia', 11.5609996, 104.8132484, 5],
      ['Chile', -33.4718984, -70.9107085, 6],
      ['Holand', 52.3567632, 4.8412268, 7],
      ['Denmark', 55.4835771, 9.4554694, 8],
      ['Belgique', 50.8550624, 4.3051784, 9],
      ['Czech Republic', 50.0597717, 14.1847527, 10],
      ['Poland', 51.9473964, 14.742217, 11],
      ['Italy', 41.9102411, 12.3955693, 12],
      ['Monaco', 43.7383526, 7.4069056, 13],
      ['Tenisia', 36.7950754, 10.0028483, 14],
      ['Morocco', 35.5851872, -5.4366901, 15],
      ['Scotland', 55.941178, -3.3458099, 16],
      ['England', 36.132041, -5.3880228, 17],
      ['Portugal', 38.7437395, -9.2304158, 18],
      ['Germany', 51.1325372, 10.3099405, 19],
      ['Spain', 40.4381307, -3.8199655, 20],
      ['Universidad de Málaga', 36.7009496, -4.4711092, 21],
      ['Marthin-Luther-Universität Halle-Wittenberd', 51.485183, 11.9674985, 22]

    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(36.71, -4.42),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < 2; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
       google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
              new google.maps.Size(52, 78);

        }
      })(marker, i));
    }
    for (i = 2; i < 20; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
    	icon: 'https://s24.postimg.org/72nnfjpr9/blue_dot.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    for (i = 20; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      });


      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

      /*ENDMAP*/
     /*BARRAS CRECIENDO*/
      var x = true;
      $('.flecha').click(function(){
      	if (x) {
			$("#about2").slideDown('slow',function() {
				$(".flecha a").attr("href", "#about2")  }); 
			x=false;
		} else {
			$("#about2").slideUp('slow',function() {
				$(".flecha a").attr("href", "#cono")  }); 
			x=true;
		}
      });

		    $('#html').animate({
		        width: '70%'
		    }, 20000,function(){$('.spani').html('<span class="spani">For now</span>')});
		    $('#css').animate({
		        width: '70%'
		    }, 20000);
		    $('#js').animate({
		        width: '50%'
		    }, 20000);
		    $('#git').animate({
		        width: '30%'
		    }, 20000);
		     $('#dGrafico').animate({
		        width: '50%'
		    }, 20000);
		      $('#ofimatica').animate({
		        width: '90%'
		    }, 20000);
		       $('#socialMedia').animate({
		        width: '90%'
		    }, 20000);

		/*FIN BARRAS CRECIENDO*/
	   		$('[data-toggle="tooltip"]').tooltip();   

	    /*INPUT CONTACT*/
		    $('.boton').click(function(){
		    	
		    	$('.result').text("(+34) 952 93 55 04 // (+34) 629 58 22 32");
		    	$('.colortransp').css('color', 'white');
		    	$('.colortransp2').css('color','transparent');
		    	
			});
			$('.botonf').click(function(){
				$('.colortransp2').css('color','white');
				$('.result').text("");
		    	$('.colortransp').css('color', 'transparent');
			});

			$('.ca').click(function(){
				if(window.matchMedia("screen and (max-width: 767px)").matches){
					$('.navbar-toggle').click();
				}
			});


			
			

			/* ------------ IDIOMAS-------------- */
			

			$(function () {

					    // Lets be professional, shall we?
					    "use strict";

					    // Some variables for later
					    var dictionary, set_lang;

					    // Object literal behaving as multi-dictionary
					    dictionary = {
					        "english": {
								"_menuabout": 'Me',
								"_menucono": 'Knowledge',
								"_menuexperience": 'Experiences',
								"_menuprojects":'Projects',
								"_menucontact":'Contact',
								"_h1_1":'I AM MLUISA',
								"_h1_2":'&& DEVELOPER',
								"_vardeveloper":"developer",
								"_varname":"name",
								"_varpasion":'passion',
								"_varcomputing":'computing',
								"_vartravel":'travel',
								"_varciencia":'science',
								"_vargoal":'goal',
								"_varfuture":'a stable future',
								"_varsituacion":'situacionDeAprendizaje',
								"_vargraphic":'#graphic',
								"_vartime":'time',
								"_varlearning":'learning',
								"_varmodo":'mode',
								"_varautodidacta":'self-taught',
								"_vartiempoinvertido":'timeInvested',
								"_varaproximado":'approximately',
								"_varmeses":'months',
								"_varme":'me',
								"_varcurve":'learning-curve',
								"_knowledge":'Knowledge',
								"_Time":'Time',
								"_h11_1":'To whom it may concern:',
								"_h11_2": 'The nature of my interest at computing was the motor that made me learn by myself using different platforms and online courses',
								"_h11_3":'etc.). It involved a great deal of independent research, requiring initiative, self-motivation and a wide range of skills.',
								"_h11_4":'For one course, freecodecamp, for example, an understanding of mathematics and basic computing concepts was essential. I have this basis and besides that, I find the creation out of code really stimulating.',
								"_h11_5":'I am a fast and accurate learner, with a keen eye for detail and I should be very grateful for the opportunity to progress to this sector. I am able to take on the responsibility immediately, and have the enthusiasm and determination to ensure that I make a success of it.',
								"_h11_6":'Thank you for taking the time to read this and I look forward to hearing from you in the near future.',
								"_h11_7":'Yours faithfully,',
								"_informaticaprogramacion":'computing.development',
								"_LOADING":'LOADING %',
								"_informaticaotros":'computing.others',
								"_dgrafico":'Graphic design',
								"_ofimatica":'Office automation',
								"_socialmedia":'Social media',
								"_cobertura":'For Windows, as well as for OS X and Linux.',
								"_Psicologia":'Psychology',
								"_psicodiv_1":'Study and internship in Germany',
								"_psicodiv_2":'and Spain',
								"_psicodiv_3":'University of Málaga',
								"_psicodiv_4":'Neuro-psychology',
								"_psicodiv_5":'Internship of neuropsychology in Berlin',
								"_psicodiv_6":' by H. Dr. Schumacher.',
								"_psicodiv_7":'Clinical psychology ',
								"_psicodiv_8":'Extraordinary scores on this branch.',
								"_psicodiv_9":'Scientific methodology ',
								"_psicodiv_10":'Term paper ',
								"_psicodiv_11":'about this subject, which note was a 9 out of 10.',
								"_rhdiv_1":' Human Resources',
								"_rhdiv_2":'Official Master of Human Resources: Planning, Organisation and Talent Management',
								"_rhdiv_3":' in the University of Camilo José Cela and ',
								"_rhdiv_4": 'Internship of HR in Malaga',
								"_otrosdiv":'Other courses',
								"_Idiomas":'Languages',
								"_Espanol_0":'Spanish',
								"_Espanol_1":'Born in Spain',
								"_Espanol_2":'Grown up in Spain',
								"_Espanol_3":'Studies in Spain',
								"_Espanol_dominio":'Mastery: 9/10',
								"_Ingles_0":'Inglés',
								"_Ingles_1":'Grown up in a tourist area.',
								"_Ingles_2":'Multiple experiences abroad.',
								"_Ingles_3":'Many English courses and courses in English',
								"_Ingles_Aleman_dominio":'Mastery: 8/10',
								"_deutsch_0":'German',
								"_deutsch_1":'5 years in an official languagecourse',
								"_deutsch_2":'11 months in Halle (an der Saale)-Germany- with a Erasmus-Study scholarship',
								"_deutsch_3":'7 months in Berlin -Germany- with a Erasmus-Internship scholarship',
								"_deutsch_4":'Visits to Germany before and after the \'Erasmus periods\'',
								"_deutsch_5":'Friendships from German speaking countries',
								"_Previous":'Previous',
								"_Next":'Next',
								"_Trabajo":'Work',
								"_Estudios":'Study',
								"_Placer":'Leisure trips',
								'_trabajos1': 'Internship of Neuro-Psychology',
								'_trabajos2': 'Internship of Human Resources',
								"_Funciones":'Functions',
								"_funciones_ps_1":'Behaviour control and diagnostic of elderly people who suffer dementia.',
								"_funciones_ps_2":'Psychological support to the patients and their families.',
								"_funciones_ps_3":'Support to the neurologist and the occupational therapist.',
								"_funciones_ps_4":'Control of medical records and medications of patients.',
								"_funciones_rh_1":'Publication of job offers on the company website and other employment sites.',
								"_funciones_rh_2":'Initial CVs screening.',
								"_funciones_rh_3":'Phone, personal and group interview (in Spanish and English).',
								"_funciones_rh_4":'Phone and personal assistance to candidates.',
								"_funciones_rh_5":'Administrative management (enrolment/disenrollment in the social security, contract modifications, Payslips management,...).',
								"_sentencia":'My impression about this portfolio is possitive.',
								"_contacto_email":'Contact me or tell me anything you consider convenient: ',
					        	"_call":'You can call me at:',
					        	"_hurt": 'You hurt, but let me know anyway your opinion (if it is constructive), thank you.'
					        },
					        "spanish": {
								'_menuabout': 'Yo',
								'_menucono': 'Conocimientos',
								'_menuexperience': 'Experiencias',
								'_menuprojects':'Proyectos',
								'_menucontact':'Contacto',
								'_h1_1':'SOY MLUISA',
								'_h1_2':'&& PROGRAMADORA',
								'_vardeveloper':"programadora",
								'_varname':"nombre",
								'_varpasion':'pasion',
								'_varcomputing':'"informática"',
								'_vartravel':'"viajar"',
								'_varciencia':'"ciencia"',
								'_vargoal':'meta',
								'_varfuture':'"un futuro estable."',
								'_varsituacion':'situacionDeAprendizaje',
								'_vargraphic':'#grafica',
								'_vartime':'tiempo',
								'_varlearning':'aprendizaje',
								'_varmodo':'modo: ',
								'_varautodidacta':'"autodidacta"',
								'_vartiempoinvertido':'tiempoInvertido',
								'_varaproximado':'"aproximadamente"',
								'_varmeses':'"meses"',
								'_varme':'"yo"',
								'_varcurve':'"curva-de-aprendizaje"',
								'_knowledge':'Conocimiento',
								'_Time':'Tiempo',
								'_h11_1':'A quien pueda interesar:',
								'_h11_2':'la naturaleza de mi interés en la informática me ha impulsado a aprender de forma autodidacta a través de diversas plataformas y cursos online',
								'_h11_3':' etc.). Esto ha supuesto y supone una indagación autónoma, que requiere iniciativa, auto-motivación y un amplio rango de habilidades.',
								'_h11_4':'Para el curso de freecodecamp, por ejemplo, es esencial una comprensión de matemáticas y conceptos básicos de informática. Yo poseo una buena base de la misma y además, encuentro realmente estimulante la creación a partir de código.',
								'_h11_5':'Aprendo de forma rápida y precisa, tengo ojo para el detalle y estaría muy agradecida de tener la oportunidad de formar parte del crecimiento de este mercado. Soy capaz de tomar responsabilidades. Tengo disponibilidad inmediata y un gran entusiasmo y determinación como para asegurar de que tendré éxito en lo que se me encomendara.',
								'_h11_6':'Gracias por su tiempo para leer esta carta. Espero recibir pronto noticias suyas.',
								'_h11_7':'Reciban un cordial saludo,',
								'_informaticaprogramacion':'informatica.programacion',
								'_LOADING':'CARGANDO %',
								'_informaticaotros':'informatica.otros',
								'_dGrafic':'Diseño gráfico',
								'_ofimatic':'Ofimatica',
								'_socialmedi':'Redes sociales',
								'_cobertura':'Tanto para Windows, como para OS X y Linux.',
								'_Psicologia':'Psicología',
								'_psicodiv_1':'Carrera y práctica en Alemania',
								'_psicodiv_2':'y España',
								'_psicodiv_3':'Universidad de Málaga',
								'_psicodiv_4':'Neuro-psicología',
								'_psicodiv_5':'Prácticas de neuropsicología en Berlín',
								'_psicodiv_6':' junto al H. Dr. Schumacher.',
								'_psicodiv_7':'Psicología clínica ',
								'_psicodiv_8':'Notas excepcionales en esta rama.',
								'_psicodiv_9':'Metodología científica ',
								'_psicodiv_10':'Trabajo de Fin de Grado ',
								'_psicodiv_11':'en esta materia, cuya nota fue un 9 sobre 10.',
								'_rhdiv_1':'Recursos Humanos',
								'_rhdiv_2':'Máster Oficial de RRHH: Planificación, Organización y Gestión del Talento',
								'_rhdiv_3':' en la Universidad Camilo José Cela e ',
								'_rhdiv_4': 'Prácticas de RRHH en Málaga',
								'_otrosdiv':'Otros cursos',
								'_Idiomas':'Idiomas',
								'_Espanol_0':'Español',
								'_Espanol_1':'Nativa de España',
								'_Espanol_2':'Crianza en España',
								'_Espanol_3':'Estudios en España',
								'_Espanol_dominio':'Dominio: 9/10',
								'_Ingles_0':'Inglés',
								'_Ingles_1':'Crianza en zona turística',
								'_Ingles_2':'Múltiples experiencias en el extranjero',
								'_Ingles_3':'Numerosos cursos de y/o en inglés',
								'_Ingles_Aleman_dominio':'Dominio: 8/10',
								'_deutsch_0':'Alemán',
								'_deutsch_1':'5 años en la EOI',
								'_deutsch_2':'11 meses en Halle (an der Saale)-Alemania- con una beca Erasmus-Estudio',
								'_deutsch_3':'7 meses en Berlin -Alemania- con una beca Erasmus-Práctica',
								'_deutsch_4':'Visitas a Alemania anteriores y posteriores a los \'periodos Erasmus\'',
								'_deutsch_5':'Amistades provenientes de países de habla alemana',
								'_Previous':'Anterior',
								'_Next':'Siguiente',
								'_Trabajo':' Trabajo.',
								'_Estudios':' Estudios.',
								'_Placer':' Placer.',
								'_trabajos1': 'Prácticas de neuro-psicología',
								'_trabajos2': 'Prácticas de Recursos Humanos',
								'_Funciones':'Funciones',
								'_funciones_ps_1':'Evaluación del comportamiento y diagnóstico psicológico de personas con trastornos degenerativos.',
								'_funciones_ps_2':'Asistencia al neuro-psicólogo.',
								'_funciones_ps_3':'Control de historial y medicamentos de los pacientes.',
								'_funciones_ps_4':'Apoyo de pacientes con demencia y otros trastornos mentales.',
								'_funciones_rh_1':'Publicación de ofertas en web propia y webs de empleo.',
								'_funciones_rh_2':'Criba curricular.',
								'_funciones_rh_3':'Entrevista telefónica, personal y grupal, en español y en inglés.',
								'_funciones_rh_4':'Atención telefónica y atención presencial a candidatos.',
								'_funciones_rh_5':'Gestión administrativa (altas, bajas, modificaciones, gestión nóminas,...).',
								'_sentencia':'La impresion que tengo acerca de este portfolio es positiva.',
								'_contacto_email':'Póngase en contacto conmigo o coménteme cualquier cosa que estime conveniente: ',
					        	"_call":'Puede llamarme al:',
					        	"_hurt": 'Eso duele, pero de todas formas, déjame saber tu opinión (si es constructiva), gracias.'

					        },
					        "german": {
					            '_menuabout':  'Ich',
								'_menucono':  'Kenntnisse',
								'_menuexperience':  'Erfahrungen',
								'_menuprojects': 'Projekte',
								'_menucontact': 'Kontakt',
								'_h1_1': 'ICH BIN MLUISA',
								'_h1_2': '&& PROGRAMMIERERIN',
								'_vardeveloper': "programmiererin",
								'_varname': 'Name',
								'_varpasion': 'Leidenschaft',
								'_varcomputing': '"Informatik"',
								'_vartravel': '"Reisen"',
								'_varciencia': '"Wissenschaft"',
								'_vargoal': '"Ziel"',
								'_varfuture': 'eine stabile Zukunft',
								'_varsituacion': 'Lernsituation',
								'_vargraphic': '#Graphik',
								'_vartime': 'Zeit',
								'_varlearning': 'Lernen',
								'_varmodo': 'Modus',
								'_varautodidacta': 'Selbstunterricht',
								'_vartiempoinvertido': 'investierteZeit',
								'_varaproximado': 'ungefähr',
								'_varmeses': 'Monate',
								'_varme': 'ich',
								'_varcurve': 'Lernkurve',
								'_knowledge': 'Kenntnis',
								'_Time': 'Zeit',
								'_h11_1': 'An die zuständige Abteilung:',
								'_h11_2': 'meine Interesse an der Informatik hat mir selbst-erlernt über verschiedene Plattformen und Online-Kurse angetrieben, zu lernen',
								'_h11_3':  'usw.). Es nahm und nimmt eine große unabhängige Forschung an, die Initiative, Selbstmotivation und eine breite Vielfalt von Fähigkeiten erfordert.',
								'_h11_4': 'Für den Kurs \'Freecodecamp\', zum beispiel, das Verständnis der Mathematik und grundlegenden Computerkonzepten ist wesentlich. Ich habe eine gute Basis davon und, außerdem, finde ich die Erstellung aus Code wirklich anregend.',
								'_h11_5': 'Ich bin ein schneller und genauer Lerner, mit einem scharfen Auge für Detail und ich wäre sehr dankbar, wenn ich die Gelegenheit hätte, ein Teil des Wachstum dieses Sektor zu sein. Ich bin in der Lage, Verantwortung sofort zu übernehmen, und ich habe die Begeisterung und Entschlossenheit, um sicherzustellen, dass ich Erfolg hätte.',
								'_h11_6': 'Vielen Dank, dass Sie sich die Zeit genommen haben, dies zu lesen, und ich freue mich darauf, von Ihnen in naher Zukunft zu hören.',
								'_h11_7': 'Mit freundlichen Grüßen,',
								'_informaticaprogramacion': 'Informatik.Programmierung',
								'_LOADING': 'LADEN %',
								'_informaticaotros': 'Informatik.Andere',
								'_dGrafic': 'Graphik-Design',
								'_ofimatic': 'Büroautomatisierung',
								'_socialmedi': 'Soziale Netzwerke',
								'_cobertura': 'Sowohl für Windows, als auch für OS X und Linux.',
								'_Psicologia': 'Psychologie',
								'_psicodiv_1': 'Studium und Praktikum in Deutschland',
								'_psicodiv_2': 'und Spanien',
								'_psicodiv_3': 'Universität von Malaga',
								'_psicodiv_4': 'Neuro-Psychologie',
								'_psicodiv_5': 'Praktikum von Neuro-Psychologie in Berlin',
								'_psicodiv_6': ' bei H. Dr. Schumacher.',
								'_psicodiv_7': 'Klinische Psychologie ',
								'_psicodiv_8': 'Außergewöhnliche Noten in diesem Bereich.',
								'_psicodiv_9': 'Forschungsmethodologie ',
								'_psicodiv_10': 'Bachelorarbeit ',
								'_psicodiv_11': 'über diesem Fach, dessen Note war eine 9 von 10.',
								'_rhdiv_1': 'Personalmanagement',
								'_rhdiv_2': 'Offizieller Master in Human Resources: Planung, Organisation und Leitung der Talent',
								'_rhdiv_3': ' in der Universität von Camilo José Cela und ',
								'_rhdiv_4': 'Praktikum von HR in Malaga',
								'_otrosdiv': 'Andere Kurse',
								'_Idiomas': 'Sprache',
								'_Espanol_0': 'Spanisch',
								'_Espanol_1': 'In Spanien geboren',
								'_Espanol_2': 'In Spanien aufgezogen',
								'_Espanol_3': 'In Spanien studiert',
								'_Espanol_dominio': 'Beherrschung: 9/10',
								'_Ingles_0': 'Englisch',
								'_Ingles_1': 'In einem Touristengebiet aufgezogen',
								'_Ingles_2': 'Mehrfach Erfahrungen im Ausland',
								'_Ingles_3': 'Zahlreiche Kurse auf Englisch und Englishkurse',
								'_Ingles_Aleman_dominio': 'Beherrschung: 8/10',
								'_deutsch_0': 'Deutsch',
								'_deutsch_1': '5 Jahre in einem offiziellen Sprachkurs (EOI)',
								'_deutsch_2': '11 Monate in Halle (an der Saale)-Deutschland- mit einem Erasmus-Studium-Stipendium',
								'_deutsch_3': '7 Monate in Berlin -Deutschland- mit einem Erasmus-Praktika-Stipendium',
								'_deutsch_4': 'Besuche in Deutschland vor und nach die \'Erasmus-Zeiträume\'',
								'_deutsch_5': 'Freundschaften aus deutschsprachige Länder',
								'_Previous': 'Vorheriger',
								'_Next': 'Nächster',
								'_Trabajo': 'Arbeit',
								'_Estudios': 'Studium',
								'_Placer': 'Vergnügungsreise',
								'_trabajos1': 'Praktikum von Neuro-Psychologie',
								'_trabajos2': 'Praktikum von Human Resources',
								'_Funciones': 'Funktionen',
								'_funciones_ps_1': 'Verhaltenskontrolle und psychologische Diagnose von Menschen mit degenerativen Störungen.',
								'_funciones_ps_2': 'Hilfeleistung zu der Neuropsychologe.',
								'_funciones_ps_3': 'Kontrolle des Krankengeschichte und Medikamente des Patienten.',
								'_funciones_ps_4': 'Unterstützung von Patienten mit Demenz und anderen psychischen Störungen.',
								'_funciones_rh_1': 'Veröffentlichung von Angebote in eigenen Website und andere Arbeit-Websites.',
								'_funciones_rh_2': 'CV screening.',
								'_funciones_rh_3': 'Telefon, persönliche und Gruppen Einstellungsgespräche, auf Spanisch und Englisch.',
								'_funciones_rh_4': 'Telefon- und persönliche-Unterstützung der Kandidaten.',
								'_funciones_rh_5': 'Verwaltungsmanagement (Einschreibung / Entlassung in die Sozialversicherung, Vertragsänderungen, Gehaltsbescheinigungen-Management,...).',
								'_sentencia': 'Mein Eindruck über dises portfolio ist possitiv.',
								'_contacto_email': 'Kontaktieren Sie mich oder erzählen Sie mir einfach bitte, was Sie geeignet erachten): ',
					        	"_call":'Sie können mich hier anrufen:',
					        	"_hurt": 'Es tut weh, auf jeden Fall aber lassen Sie mich bitte Ihre Meinung wissen (wenn es konstruktive ist), danke.'
					        }
					    };

					    // Function for swapping dictionaries
					    set_lang = function (dictionary) {
					        $("[data-translate]").text(function () {
					            var key = $(this).data("translate");
					            if (dictionary.hasOwnProperty(key)) {
					                return dictionary[key];
					            }
					        });
					    };

					    // Swap languages when menu changes
					    $("#lang").on("change", function () {
					        var language = $(this).val().toLowerCase();
					        if (dictionary.hasOwnProperty(language)) {
					            set_lang(dictionary[language]);
					        }
					    });

					    // Set initial language to English
					    set_lang(dictionary.english);

					});
		$('.loader').fadeOut(3000);

});
