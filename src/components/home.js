import React, { Component} from "react";
import Carousel from 'react-bootstrap/Carousel';



export default class Home extends Component {
  render() {
    return (
        // eslint-disable-next-line no-undef
        <Carousel >

          <Carousel.Item>
            <img
            alt="First slide"
            src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/906008_1651281781754103_3090316986419273229_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG1iuAYSJOmyNP2J16K_sUym_R9hRweR_ub9H2FHB5H--YV12SH3i1OSIPuNx6AvZbClqD5LPww5L6xa5whc_y-&_nc_ohc=GnDM8Jt5oFwAX_bkflK&tn=d1OULQvvQF9lcXK1&_nc_ht=scontent-bog1-1.xx&oh=00_AfCvayb3aj3E3cG_dmYG8r-hgZOkFa4MFi-2eWIyR0EpRw&oe=63B78C45" 
            className=" img-thumbnail d-bock w-100 my-3 rounded-4"
              //className=" lg-10;"
              
              
            />
            <Carousel.Caption >
              
              <p className="bg-success form-wrapper rounded-4">“Haz que las palabras sean arte y no dolor.” Acción poética, La Paz, Bolivia.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
           alt="Second slide"
           src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/13064707_1751577195057894_7737625205970002632_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEoWOnHXBzgoMGIK2Mu8GDTvkAUPpFvFPO-QBQ-kW8U8wRDG5IxErpkkeGE98770MbQ9uZjAD7_5AodvU5Za-bn&_nc_ohc=nPwt0fafkiYAX-_bvvq&_nc_ht=scontent-bog1-1.xx&oh=00_AfBtqM9N8fz5ptkSH6HijApb3eN6bl1Z45U6ffHtmfQZYQ&oe=63B78695" 
           className=" img-thumbnail d-bock w-100 my-3 rounded-4"
              //className=" lg-10;"             
              
            />
            <Carousel.Caption >
         
              <p className="bg-success form-wrapper rounded-4">  “El arte puede cambiar cómo me siento en las mañanas. La misma obra puede cambiarme en distintas formas, depende de por lo que estoy pasando.”  David Bowie</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
           alt="Third slide"
           src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/11792147_1659105587638389_4576592262907434646_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEjBe4AqK_NIBN57bmTXo-8SIsO4vmc1Y9Iiw7i-ZzVjwQKqQap9oahJy7uDyTYvFh1cUp_5biV6aZ67Qu3PP8S&_nc_ohc=Nai0xmGLPmIAX9C0UWa&_nc_ht=scontent-bog1-1.xx&oh=00_AfAAyQIFAtU9dKT34FUcXKE-9-YRCXMEzCKIhMxxUWF1yg&oe=63B7842E"  
            className=" img-thumbnail d-bock w-100 my-3 rounded-4"
              //className=" lg-10;"             
              
            />
            <Carousel.Caption >
              <p className="bg-success form-wrapper rounded-4">  “El arte es la filosofía que refleja un pensamiento.”  Antoni Tàpiez</p>
            </Carousel.Caption>
          </Carousel.Item>
          

          <Carousel.Item>
            <img
           alt="Fourth slide"
           src="./gatos.png"  
            className=" img-thumbnail d-bock w-100 my-3 rounded-4"
              //className=" lg-10;"             
              
            />
            
          </Carousel.Item>

         
        

        </Carousel>
      );
    
      
        }
      }

