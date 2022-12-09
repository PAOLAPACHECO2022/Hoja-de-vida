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
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318436036_3321831864699078_6295963960734629542_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGb79lMtn57PfTL6gB1jjbgPBLeM0GH78c8Et4zQYfvx0Nfgj5PSdobarrmBwJaQyu1ko2iRcHEp3jrzb0kl8mc&_nc_ohc=sp7D_lmTdtIAX_qBGa9&_nc_ht=scontent-bog1-1.xx&oh=00_AfAmWCuLie1_QqBUuYH35sDWLcA-tHokhExXRSPWkuTPiA&oe=6396F591" 
        className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '33rem' }}
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Seventh slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/316813747_3321831854699079_7413003996634075567_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHWcKqAHCxcX-i-bY-OL0Hw0xzQnFMdNKDTHNCcUx00oL0LkygLTm4E6eoyAEvsbLKiIVSAwP61dFrEAnGU_UiQ&_nc_ohc=ZgkBaOyv_O4AX9Xh2Dv&_nc_ht=scontent-bog1-1.xx&oh=00_AfBwkt29uBkiNNp3KPF8H0Il23VmhIr_dheGF5EeM3su-w&oe=63975A2F" 
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
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/317943916_3321831648032433_7232224002297734427_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGD9G9-FCjhrICQoH08bBOhPpav-OgGuCg-lq_46Aa4KKnhpZZPHtDAfFV9X6zT4mVk_qEVcJys6rjP5WPp807T&_nc_ohc=JMwKd_gEhDsAX-sNDgT&_nc_ht=scontent-bog1-1.xx&oh=00_AfByJ63tMimXn5H3rXLBTCk9za_NWItq9MqwXIJYzdYNQw&oe=639670B1" 
          className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Eleventh slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318320874_3321831644699100_46481856180241245_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwr4oHT8hWKb2fU55jxPlyPo8U9bJJp00-jxT1skmnTWXKO_m2gzwPaobv0lKfKk6PhSiED7bhwE_Rqzhlmo9j&_nc_ohc=1LowVnWWcZcAX_4D3Ai&_nc_ht=scontent-bog1-1.xx&oh=00_AfBaXvw7uYFwkJ7-3tUS2PlOSZDRrMiRaNNI8MaOk3uJig&oe=6396C01E" 
          className="img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper"
  
        style={{ height: '25rem', width: '30rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Twelfth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/316813595_3321831588032439_7208329461542485451_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGBCzefhBL4tGuTs_JVDeekD2LI3F9nEq0PYsjcX2cSrZgTNkvaOlBmflTW2iZuI326KpqgW5KDTKL-u_lNC1p6&_nc_ohc=XIk6Yy7sgEgAX9aaZ8r&_nc_ht=scontent-bog1-1.xx&oh=00_AfD5lyWnF9uKXNRYDt2Y8-RkOLP064E-hSjQmpiefwS2-A&oe=6396A8CC" 
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
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318242802_3322059458009652_3937462111384245434_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFLgc2nyo63uPMmmxXdkgUUb3CKqR5pl1VvcIqpHmmXVWowO17i-m-rr9ZSHLY2QuKs8Ti3Dz7Q9jTHtE_htW_J&_nc_ohc=IGHcz3d6mYcAX9ef9U4&_nc_ht=scontent-bog1-1.xx&oh=00_AfBEagdJeZ6cVT9Y4GkOOM9jlU0pr9n9yx3u6z8GLIUNHg&oe=6396ED36"
 className=" img-thumbnail my-3 rounded-4 d-flex justify-content-center form-wrapper" 
        style={{ height: '25rem', width: '40rem' }}          
              
            />
          </Carousel.Item>
      
      <Carousel.Item>
            <img
           alt="Fifteenth slide"
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/318226033_3322059384676326_3908868136973337158_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFIpEWKsPKkAuczvvEVYxa45jFNnjI3HrjmMU2eMjceuKoNfF9DVUN5qqNe_0DN6_6xFI8nsY2FV_PLF2sACfdR&_nc_ohc=9dASImFiN9AAX9_DAOD&tn=yZ7i9IOsIermm4V2&_nc_ht=scontent-bog1-1.xx&oh=00_AfCZRJiFCw6A96acD5EZiCBMLjyfsrnc-6ShM0iZwvnRCg&oe=63977386"
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
          src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/317929759_3321831488032449_3839597918049270915_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHevJbxq305HoEjdqpZxoYbv8-1NNbkINO_z7U01uQg01p0unnk-9qZxIVEyRoQ6SKNu8AWcmha3sskYEJonFNP&_nc_ohc=OH_RU-Sz1ecAX8vPb_h&tn=yZ7i9IOsIermm4V2&_nc_ht=scontent-atl3-2.xx&oh=00_AfAstwQL88ZGDNUM9zY9IVF1oFEpcgLJHn8ipHyGGAi4bw&oe=6396B089" 
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