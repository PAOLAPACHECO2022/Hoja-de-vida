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
             className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}
              
            />
            <Carousel.Caption >
              
              <p className="bg-success form-wrapper rounded-4">“Haz que las palabras sean arte y no dolor.” Acción poética, La Paz, Bolivia.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
           alt="Second slide"
           src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/13064707_1751577195057894_7737625205970002632_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEoWOnHXBzgoMGIK2Mu8GDTvkAUPpFvFPO-QBQ-kW8U8wRDG5IxErpkkeGE98770MbQ9uZjAD7_5AodvU5Za-bn&_nc_ohc=nPwt0fafkiYAX-_bvvq&_nc_ht=scontent-bog1-1.xx&oh=00_AfBtqM9N8fz5ptkSH6HijApb3eN6bl1Z45U6ffHtmfQZYQ&oe=63B78695" 
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
              //className=" lg-10;"  
        style={{ height: '25rem', width: '40rem' }}       
              
            />
          
          </Carousel.Item>
          
          <Carousel.Item>
            <img
           alt="Third slide"
           src="https://scontent-bog1-1.xx.fbcdn.net/v/t31.18172-8/11792147_1659105587638389_4576592262907434646_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEjBe4AqK_NIBN57bmTXo-8SIsO4vmc1Y9Iiw7i-ZzVjwQKqQap9oahJy7uDyTYvFh1cUp_5biV6aZ67Qu3PP8S&_nc_ohc=Nai0xmGLPmIAX9C0UWa&_nc_ht=scontent-bog1-1.xx&oh=00_AfAAyQIFAtU9dKT34FUcXKE-9-YRCXMEzCKIhMxxUWF1yg&oe=63B7842E"  
            className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}
              
            />
          </Carousel.Item>
          

          <Carousel.Item>
            <img
           alt="Fourth slide"
           src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318326621_3321831934699071_8122746998955327410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE4CT17LGCmJShw9zkDC4Pe_svAbKl9Akf-y8BsqX0CRz3pyzVXaM1B7xpYJdNK8Emmf1MaqiQfjwIAeCF9fovr&_nc_ohc=ikb7xzIUWsAAX_ysZ2o&tn=yZ7i9IOsIermm4V2&_nc_ht=scontent-bog1-1.xx&oh=00_AfCrb2qCdFH65Xw-nHMJ4sFw53X9-Qib59rRHXHyS3nGDQ&oe=63978847"  
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '35rem' }}
              
            />
            
          </Carousel.Item>
      
      
      <Carousel.Item>
            <img
           alt="Fifth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/317747636_3321831878032410_3249404754322525378_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHiEB8ZRLRzSeXG2WZkrKhm-MOUwQjaHIr4w5TBCNocirExaR8RcgKG5F_4CmdZX_XVDTuPri8pzFWtI8qneWEe&_nc_ohc=w-LlHURO7_cAX8qfQjl&tn=yZ7i9IOsIermm4V2&_nc_ht=scontent-bog1-1.xx&oh=00_AfB2wTeDd7NxaQYuEobLCEOfzSNRs-pz5dUb5IJoStwq6Q&oe=6398571E" 
        className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '20rem' }}
     
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Sixth slide"
           src="/c6.jpg"
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '33rem' }}
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Seventh slide"
           src="/c7.jpg"
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Eighth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/319283928_3321831811365750_6361704321542720002_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH6BFP8gRZlqnGlnmnHshKbcLRO4K2G_55wtE7grYb_noEzZguSCKAk_77zzo_N5MNkThCpNE7KJ600s2ECpjE4&_nc_ohc=knSsvZYUcUoAX96M56Q&_nc_ht=scontent-bog1-1.xx&oh=00_AfD6BiIH_DRNo16_yuy-9-8cIS4i5Aev0q8lT0cORJ7ygQ&oe=639821C7" 
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}            
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Ninth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318606766_3322059471342984_1917334555809754046_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEFLXsrwqkyteikmshFhWMLRq5hex869KJGrmF7Hzr0oiNSW40lLbxfeQ06wtODZ8I-XS1Jd6xygrGUpdIgxiMP&_nc_ohc=R4CChTNi8H8AX8Hbv1N&_nc_ht=scontent-bog1-1.xx&oh=00_AfD8Ifr66M7lQHubHfYFba-RQPmle5qqqvItHdHa3LTK4g&oe=63989BA9"
className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '30rem' }}                
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Tenth slide"
           src="/c10.jpg"
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Eleventh slide"
         src="/c11.jpg"
         className="img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
  
        style={{ height: '25rem', width: '30rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Twelfth slide"
           src="/c12.jpg"
           className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}           
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Thirteenth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318201684_3322059401342991_8064400051246058170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHiYutxBAhIga9Rm66G-7eGyQEEPFOMrhDJAQQ8U4yuEDXEXB9wjuaFbb1kU1b-6h5SkNr51llJDWVZH1VF0IcF&_nc_ohc=TZ2nrgclAmYAX9QiQxN&_nc_ht=scontent-bog1-1.xx&oh=00_AfAE5fEROLlfF7tvB8YoXXBPeRyDFFR1HTlU-7DG4sqhcA&oe=63979E62"
  className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}               
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Fourteenth slide"
            src="/c14.jpg"
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Fifteenth slide"
            src="/c15.jpg"
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}
        
              //className=" lg-10;"           
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Sixteenth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318656666_3322059371342994_3040744126116768387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFY34i8NqSd8wF5dQWHZQ42dGkmPmW-Lmx0aSY-Zb4ubFXn4EScZMijZmefuHb8R-6K86O5EjVtJTKibCAscTqO&_nc_ohc=hFx0lBboeCoAX85MB06&_nc_ht=scontent-bog1-1.xx&oh=00_AfAIXtWQwhtw_qDBRWgL47SJI4bcgv8r31cX5RYj80dCTw&oe=63982D39" 
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
         
           
        style={{ height: '25rem', width: '40rem' }}
        
     
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Seventeenth slide"
          src="/c17.jpg"
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
              //className=" lg-10;"  
        style={{ height: '25rem', width: '20rem' }}
        
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="eighteenth 71x180"
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/318071961_3321831498032448_5268104203246211117_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRNmBwJ4d49NgqiDXWIQ_cBzgMllt9nDkHOAyWW32cOW00rGFA09Gla9m8RPop9mUAT7rVU5dfBSHFyCWoShOe&_nc_ohc=JTCdi5LRw0QAX_h_aAS&tn=yZ7i9IOsIermm4V2&_nc_ht=scontent-atl3-2.xx&oh=00_AfDoiRy4_t5HXM9TebViZiS6nfzdGMLiHPnUAdm-VCPodA&oe=63979B15" 
         className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
              //className=" lg-10;"  
        style={{ height: '25rem', width: '40rem' }}
        
        
              
            />
          </Carousel.Item>

   <Carousel.Item>
            <img
           alt="Ninteenth 71x180"
          src="/gatos.PNG"
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
              //className=" lg-10;"  
        style={{ height: '25rem', width: '40rem' }}
        
              
            />
          </Carousel.Item>
        </Carousel>
      );
    
      
        }
      }
