import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#investigacion">
        RuisuCode
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function PagKati() {
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <span id="investigacion"></span>
        <Card
          sx={{
            display: "flex",
            bgcolor: "#A970FF",
            p: 2,
            mt: 3,
            boxShadow: 5,
            borderRadius: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="blob:https://www.pngwing.com/4660b102-eeb0-4700-b8fe-a11bdf66f584"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography
                sx={{ textAlign: "center" }}
                color={"secondary"}
                variant="h2"
              >
                Investigación
              </Typography>
              <Typography variant="subtitle1" color="secondary" component="div">
                <u> Tema 1:</u> Historia y evolucion de la sociedad de la
                informacion y de la sociedad del <br />
                conocimiento <br /> <u> Materia:</u>Sociedad del Conocimiento{" "}
                <br />
                <u> Profa.:</u>Katiuska Nuñez
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: 5,
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 300, borderRadius: "13px" }}
            image="src\shared\assets\sociedad-e1574394980949.jpg"
            title="Sociedad"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="soci"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Que es Sociedad?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Por sociedad entendemos a una agrupación de individuos
                (generalmente humanos, aunque también puede referirse a ciertos
                animales gregarios) que se rigen por normativas comunes y formas
                de comunicación y cooperación, a menudo denominadas como
                “cultura”. La constitución de una sociedad por lo general
                implica un número importante de individuos, si bien no existen
                márgenes numéricos definidos al respecto. <br /> En cambio, es
                vital que éstos compartan características definitorias en cuanto
                a lo cultural, lo histórico, lo económico y compartan un mismo
                territorio geográfico; todo ello por encima de los lazos
                consanguíneos o genéticos. Las sociedades humanas son el objeto
                de estudio de la Sociología, que busca entender las leyes de
                organización y regulación de las sociedades.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\cal_vida.png"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="calv"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Qué es la calidad de vida?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Al hablar de calidad de vida, nos referimos a un concepto que
                hace alusión a varios niveles de la generalidad, desde el
                bienestar social o comunitario hasta ciertos aspectos
                específicos de carácter individual o grupal. Por lo tanto,
                calidad de vida tiene diferentes definiciones desde el aspecto
                filosófico y político hasta el relacionado a la salud. A través
                del tiempo se ha intentado poder plantear una definición que
                abarque todas las áreas que implica el concepto de calidad de
                vida puesto que combina componentes subjetivos y objetivos donde
                el punto en común es el BIENESTAR individual. De los últimos,
                esos se pueden agruparse en 5 dominios principales: el bienestar
                físico (como salud, seguridad física), bienestar material
                (privacidad, alimentos, vivienda, transporte, posesiones),
                bienestar social (relaciones interpersonales con la familia, las
                amistades, etcétera), desarrollo y actividad (educación,
                productividad, contribución) y bienestar emocional (autoestima,
                estado respecto a los demás, religión). <br /> Sin embargo, es
                importante comprender que la respuesta a cada uno de estos
                dominios es subjetiva y tan variable gracias a la influencia de
                factores sociales, materiales, la edad misma, la situación de
                empleo o a las políticas en salud. Como la enfermedad y su
                tratamiento pueden afectar el bienestar psicológico, social y
                económico de las personas, así como su integridad biológica, se
                puede tratar de entender a la calidad de vida en salud desde
                cada uno de esos dominios. De esta forma, la mejoría de la
                calidad de vida en los pacientes puede lograrse ya sea curando
                la enfermedad o mejorando los peores síntomas por un período
                largo o evitando daños ya sea por errores de los profesionales
                de la salud o por la presencia de efectos secundarios a los
                fármacos. Esto último de gran relevancia en las poblaciones
                vulnerables como son, por ejemplo, la de los adultos mayores.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\cono.png"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="cono"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Qué es el conocimiento?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                El conocimiento se adquiere a través de la capacidad que tiene
                el ser humano de identificar, observar y analizar los hechos y
                la información que le rodea. A través de sus habilidades
                cognoscitivas lo obtiene y lo usa para su beneficio. El
                conocimiento, como tal, es un término muy amplio, este puede ser
                práctico o teórico, además de existir numerosas ramas y áreas
                del mismo. Puede decirse que es limitado. Pero como recurso
                susceptible de aprendizaje es ilimitado. Es decir, la mente
                humana si está limitada, por diversos factores, a unos
                conocimientos limitados, ninguna persona sabe todo sobre
                cualquier ámbito. En cambio, los recursos y la información
                disponible que puede ser aprendida sí que podemos considerarla
                ilimitada, puesto que existe innumerable cantidad de
                conocimiento en cada disciplina susceptible de estudio.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\info.png"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="info"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Qué es la Información?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                La información es el conjunto de datos, procesados y ordenados
                para su comprensión, que aportan nuevos conocimientos. Puede ser
                a un individuo o sistema y sobre un asunto, materia, fenómeno o
                ente determinado. <br /> La importancia de la información radica
                en que, con base en esta, podemos solucionar problemas, tomar
                decisiones o determinar cuál alternativa, de un conjunto de
                ellas, es la que mejor se adapta a nuestras necesidades. El
                aprovechamiento que hagamos de la información, en este sentido,
                es la base racional del conocimiento.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\TICs.png"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="tic"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Tecnologías de la información y la comunicación
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Tecnologías de la información y las comunicaciones (TIC) es un
                término extensivo para la tecnología de la información (TI) que
                enfatiza el papel de las comunicaciones unificadas,la
                integración de las telecomunicaciones (líneas telefónicas y
                señales inalámbricas) y las computadoras, así como el software
                necesario, el middleware, almacenamiento, sistemas audiovisuales
                y producción audiovisual, que permiten a los usuarios acceder,
                almacenar, transmitir y manipular información.El término TIC
                también se usa para referirse a la convergencia de redes
                audiovisuales y telefónicas con redes informáticas a través de
                un único sistema de cableado u enlace. Existen grandes
                incentivos económicos para fusionar la red telefónica con el
                sistema de red informática utilizando un único sistema unificado
                de cableado, distribución de señales y gestión. TIC es un
                término general que incluye cualquier dispositivo de
                comunicación, que abarca radio, televisión, teléfonos celulares,
                computadoras y hardware de red, sistemas satelitales, etc., así
                como los diversos servicios y dispositivos con ellos, tales como
                videoconferencias y aprendizaje a distancia.Las TIC son un tema
                amplio y los conceptos están evolucionando. Cubre cualquier
                producto que almacene, recupere, manipule, transmita o reciba
                información electrónicamente en forma digital (por ejemplo,
                computadoras personales, televisión digital, correo electrónico
                o robots).
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\glob.jpg"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="glob"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Globalización de la economía
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                La globalización económica es una de las tres dimensiones
                principales de la globalización, comúnmente mencionada en la
                literatura académica. Las otras dimensiones son la globalización
                política y la globalización cultural. La globalización económica
                se refiere al movimiento internacional generalizado de bienes,
                capital, servicios, tecnología e información; y la creciente
                integración e interdependencia económicas de las economías
                nacionales, regionales y locales en todo el mundo, derivadas de
                la intensificación de dicho movimiento transfronterizo. Mientras
                la globalización es un conjunto extenso de procesos en la
                relación con múltiples redes económicas, políticas e
                intercambios culturales, la globalización económica
                contemporánea es impulsada por el rápido y significativo
                crecimiento de la información acerca de todos los tipos de
                actividades productivas y por el desarrollo de la ciencia y la
                tecnología.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/*  <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\glob.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              {/* <Typography>
                <span
                  id="glob"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Globalización de la economía
                </span>
              </Typography> */}
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Principalmente se compone por la globalización de producción,
                finanzas, mercados, tecnología, regímenes organizacionales,
                instituciones, corporaciones y empleo. Mientras la globalización
                económica se ha expandido desde el surgimiento del comercio
                internacional, ha crecido debido a la expansión en cuanto a los
                avances en comunicación y tecnología bajo el marco de Acuerdo
                General sobre Aranceles Aduaneros y Comercio y la Organización
                Mundial del Comercio, lo cual hizo que los países redujeran
                gradualmente sus barreras comerciales y abrieran sus cuentas
                corrientes y de capital. Este auge reciente ha sido apoyado en
                gran medida por las economías desarrolladas que se integran con
                los países en desarrollo a través de la inversión extranjera
                directa, la reducción de los costos de comercialización, la
                disminución de las barreras comerciales y, en muchos casos, la
                migración transfronteriza. Al mismo tiempo que la globalización
                ha incrementado radicalmente los ingresos, el crecimiento
                económico en países en desarrollo y disminuido el precio al
                consumidor en países desarrollados, también modifica la balanza
                de poder entre los países en desarrollo y los que ya se han
                desarrollado, afecta la cultura de cada uno de los países
                afectados. Y la cambiante locación de la producción de bienes ha
                generado muchos empleos transfronterizos, requiriendo que
                algunos trabajadores en países desarrollados cambien de carrera.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\psub.png"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="psub"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Pais Sub-Desarrollado
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Un país caracterizado por pobreza crónica masiva, que no es
                consecuencia de una desgracia temporal, sino por métodos de
                producción y organización social obsoletos. Es decir, la pobreza
                no es por la falta de recursos naturales y por lo tanto podría
                ser reducida por métodos aplicados en los países que hoy son
                desarrollados. <br /> Los países con ingreso per cápita bajo en
                comparación con el ingreso per cápita* de países como Estados
                Unidos, Canadá, Francia, Alemania o Japón. Un sinónimo adecuado
                sería “países pobres”. Es una definición que permite clasificar
                a los países en varias categorías de desarrollo de acuerdo a sus
                ingresos.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\sinfo.jpg"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="sinfo"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Qué es la Sociedad de la Información?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Este término no es más que una expresión del entorno actual en
                que vivimos. Una sociedad interconectada por las innovaciones
                tecnológicas que permiten que la información fluya de manera
                instantánea desde y en cualquier parte del mundo. Este ambiente
                surgió gracias a las Tecnologías de la Información y
                Comunicación (TIC) que facilitan la producción y distribución de
                la información, así como la conexión entre personas que están a
                miles de kilómetros de distancia, impulsando la globalización.
                Por eso, como ya mencionamos antes, la Sociedad de la
                Información ha desencadenado una revolución en la forma como
                accedemos a la información y como interactuamos entre nosotros.
                Atrás quedaron las épocas en las que, por ejemplo, para resolver
                una inquietud debíamos leer libros enteros hasta dar con la
                respuesta, pues Google ha facilitado el acceso al conocimiento
                con información de calidad indexada con técnicas como el SEO.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="scon"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  ¿Qué es la Sociedad del Conocimiento?
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                La sociedad del conocimiento es un término que se refiere a una
                sociedad en la que el conocimiento y la información son los
                principales motores de crecimiento económico y desarrollo
                social. En esta sociedad, la tecnología juega un papel crucial
                en la producción, distribución y empleo del conocimiento, el
                acceso a la información y la educación son esenciales para el
                éxito individual y colectivo. La sociedad del conocimiento se
                caracteriza por una economía basada en la innovación y en la
                creación de valor a través del conocimiento. <br />
                Este concepto se desarrolló a partir de la Revolución Industrial
                y la introducción de nuevas tecnologías que permitieron una
                mayor producción y acceso a información y conocimiento.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="cscon"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Características de la sociedad del conocimiento
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                Algunas de las características de la sociedad del conocimiento
                incluyen: <br />
                <u> Importancia del conocimiento:</u> El conocimiento se
                convierte en el recurso más valioso y esencial para la sociedad.
                Se valora más que los bienes materiales y el trabajo manual.{" "}
                <br />
                <u> Comunicación y colaboración:</u> La sociedad del
                conocimiento se basa en la colaboración y la comunicación. Las
                personas pueden compartir información y conocimiento a través de
                la tecnología y la globalización. <br />
                <u> Innovación:</u> La sociedad del conocimiento se caracteriza
                por un alto nivel de innovación. Las empresas y las personas
                están siempre buscando nuevas formas de crear valor y de mejorar
                sus vidas. <br />
                <u>Empleo basado en el conocimiento: </u> La sociedad del
                conocimiento se caracteriza por una economía basada en el
                conocimiento. La mayoría de los trabajos son de tipo intelectual
                y requieren habilidades y conocimientos especializados. <br />
                <u>Acceso a la información:</u> La sociedad del conocimiento
                está caracterizada por la disponibilidad y accesibilidad a la
                información y el conocimiento a través de tecnologías como
                Internet y las redes sociales. <br />
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/*   <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              {/*  <Typography>
                <span
                  id="psub"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Características de la sociedad del conocimiento
                </span>
              </Typography> */}
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                <u> Trabajo en equipo:</u> La sociedad del conocimiento valora
                el trabajo en equipo para resolver problemas complejos y
                producir nuevo conocimiento. <br />
                <u> Flexibilidad y adaptabilidad:</u> La sociedad del
                conocimiento requiere que las personas sean flexibles y
                adaptables, dispuestas a aprender y a cambiar en respuesta a los
                cambios constantes en el entorno. <br />
                <u> Creación y uso de tecnologías:</u> La sociedad del
                conocimiento se basa en la creación y uso de tecnologías
                avanzadas, como la inteligencia artificial y la robótica, para
                mejorar la vida humana y el rendimiento económico. <br />
                <u> Empleo basado en habilidades:</u> La sociedad del
                conocimiento valora habilidades como la capacidad de aprender,
                pensar críticamente y colaborar, en lugar de solo la experiencia
                o la formación formal. <br />
                <u> Economía basada en el conocimiento:</u> La economía de la
                sociedad del conocimiento se basa en la producción, distribución
                y comercio de conocimiento e información, en lugar de productos
                físicos. <br />
                <u> Participación ciudadana:</u> La sociedad del conocimiento
                promueve la participación activa de los ciudadanos en la toma de
                decisiones y el desarrollo de políticas públicas.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="csinf"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Características de la sociedad de la información
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                La Sociedad de la Información se caracteriza por: <br /> *
                Impulsar la globalización mediante el uso y desarrollo de las
                TIC. <br />
                * Fomentar la Sociedad del Conocimiento. <br />
                * Mantener libre el flujo de información y conocimiento. <br />
                * Marcar a una generación, su desarrollo e identidad. <br />
                * Comunicar de forma inmediata eventos o noticias de interés
                público. <br />
                * Permitir una mayor influencia de la sociedad en decisiones
                políticas. <br />
                * Acelerar el desarrollo económico de los países mediante la
                tecnología. <br />
                * Eliminar la presencialidad para comunicarse, estudiar o
                trabajar. <br />
                * Crear nuevos puestos de trabajo. <br />* Optimizar procesos
                industriales obsoletos que finalmente conducen a la
                transformación digital.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="csglob"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Características de la globalización economica
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                El proceso de globalización económica se caracteriza por los
                siguientes factores: <br />
                * Facilita la comercialización de productos entre los diferentes
                países del planeta. <br />
                * Incrementa el consumo de bienes y servicios. <br />
                * Fomenta la especialización. <br />
                * Fortalece las relaciones internacionales ya que son utilizadas
                para cerrar operaciones. <br />
                * Conlleva una potenciación del tejido industrial de los países
                desarrollados y emergentes. <br />
                * Elimina o reduce las barreras de comercialización entre
                diferentes áreas geográficas. <br />
                * Reduce el coste de los transportes gracias a la mejora de las
                comunicaciones. <br />
                * La globalización se apoya en el sistema financiero mundial
                para garantizar su viabilidad. <br />
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="isinf"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Importancia de la sociedad de la información
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                El surgimiento de la sociedad de la información resulta
                determinante en varios aspectos. Uno de ellos tiene que ver con
                que vuelve más igualitario el acceso al conocimiento. Así, se
                debilita el poder de quienes concentran el monopolio del
                conocimiento (como ocurrió en su momento con la imprenta). Este
                avance habilita entonces la posibilidad de que los individuos,
                más allá de la clase social a la que pertenecen, puedan dar un
                salto y ocupar ciertos espacios dentro del entramado social, que
                antes quedaba en manos de aquel monopolio. Acceder a la
                información se vuelve mucho más económico y, al mismo tiempo, no
                existen las barreras espaciales sino que cualquier individuo con
                un dispositivo tecnológico puede acceder a conocimientos que
                antes se encontraban limitados, por ejemplo, a quienes podían
                acceder a una biblioteca.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            p: 2,
            mt: "100px",
            boxShadow: 5,
            borderRadius: 3,
            border: "solid",
            borderColor: "#A970FF",
            width: "65%",
            alignItems: "center",
          }}
        >
          {/* <CardMedia
            component="img"
            sx={{ width: 251, borderRadius: "13px" }}
            image="src\shared\assets\scon.jpg"
            title="Investigacion"
          /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography>
                <span
                  id="iscon"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#A970FF",
                    borderRadius: "13px",
                    padding: "3px",
                    fontSize: "25px",
                  }}
                >
                  Importancia de la sociedad del conocimiento
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign={"justify"}
                color="primary"
                component="div"
              >
                La sociedad del conocimiento está involucrada en las actividades
                económicas, sociales, y culturales. También es conocida como el
                recurso principal que se crea, comparte y utiliza para la
                prosperidad de sus miembros. Este concepto es el factor de la
                producción que dirige a la economía y desarrollo social (tiene
                valor). Por ello es comprensible, la evolución de la humanidad a
                través de los avances en el ámbito. Por lo tanto es importante
                tener en cuenta que el contexto mundial es cambiante, indicando
                que este concepto es refutable.
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
        <Box component="footer" sx={{ bgcolor: "transparent", py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Investigaciones
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Hecho por Luis Campos. C.I:29.700.647
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Stack>
    </>
  );
}
