# ***** You-Grow-Girl BNTA Capstone project ******

![GitHub language count](https://img.shields.io/badge/Contributors-4-blueviolet)
![GitHub language count](https://img.shields.io/github/languages/count/IsoHan/You-Grow-Girl?style=for-the-badge)
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
   <img width="1026" alt="Screenshot 2021-05-06 at 22 37 41" src="https://user-images.githubusercontent.com/68763259/117381157-58700180-aed3-11eb-8c0b-dea5f049f09c.png">
  </a>

  <h3 align="center">You-Grow-Girl BNTA Capstone project</h3>

  <p align="center">
    Bright Network Technology Academy Final Capstone Full-stack Project.
    <br />
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

"Helping you take care of your plants, so your plants can take care of you"

Select 'Plant Cards' from our range of gorgeous plants that you want to grow and add them to your very own personal garden page in your account.

Each card contains detailed instructions on ideal sowing, watering and general facts about the plants! 

FUTURE EXTENSION to project: 

Design blog-like functionality where users can see other users' gardens, comment on post and share best practices. The users may also add custom plants to the database upon verification from admin with query pages for other users to see and discuss as they please within a comment / chat section. 

## Tech Stack

* FRONT-END: [React](https://reactjs.org/)
* BACK-END: [Django CRUD REST API](https://www.django-rest-framework.org/)


## Tools utilised: 

POSTMAN

DB Browser for SQLite

DBeaver

Discord

Miro 

ClickMe



## Coding methodology and practices maintained throughout the project: 

#### Duration: 1 week

### 9:30-10 morning meetings and update tasks for completion

### 11:45 Revise tasks for afternoon session

### 2:00-4:30 Complete remaining tasks + pair programming

### 4:30 - 5:00 End of day retro to summarise the day's work


<!-- GETTING STARTED -->
### Getting Started



## Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

## Installation

1. Clone the repo
 ```sh
   git clone https://github.com/IsoHan/You-Grow-Girl.git
   ```
2. in the main project directory you will be required to download all python dependencies such as those needed for the Django rest_framework and simple JWT token authentication. To do so please enter the following command: 
```sh
python -m pip install -r requirements.txt
 ```
4. in 'frontend' folder install NPM packages
 ```sh
  npm install
  ```
3. on current terminal start front end React server using node js
 ```sh
  npm start
  ```
4. WHILST the server in step 3 is running, start a new terminal and in the 'backend' folder start the backend Django REST API server using 
```sh
  python3 manage.py runserver
  ```
5. Whilst both servers in steps 3 and 4 are running simultaneously, you can modify the code and alter the UI / functionality (if new dependencies are installed it is best practice to restart the servers by fully killing their ports and restarting as to ensure all the latest alterations to the code are utilised)

shortcuts on mac OS to kill ports in terminal: 

front-end kill port 3000 command:
 ```sh
 lsof -i tcp:3000
  ```
back-end kill port 8000 command:
 ```sh
sudo lsof -t -i tcp:8000 | xargs kill -9
  ```
  
 ## Authentication utilised for user login / registration
 
[SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

# Token types utilised

 ```sh
Access Token
  ```
  
```sh
Refresh Token
 ```



 

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact
Project Link: [https://github.com/IsoHan/You-Grow-Girl](https://github.com/IsoHan/You-Grow-Girl)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/IsoHan/You-Grow-Girl/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-url]: https://www.linkedin.com/showcase/bright-network-technology-academy/


