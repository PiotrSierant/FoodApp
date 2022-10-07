<div align="center">
    <img src="https://github.com/PiotrSierant/portfolioWeb/blob/master/public/images/logo_darkblue.svg" alt="Logo" width="80" height="80">
    
<h3 align="center">FoodApp</h3>

<p align="center">
<a href="https://foodapp-sierant.vercel.app/">View Live</a>
</p>

</div>

## ABOUT THE EXERCISE

Skąd pomysł na projekt?
Mnóstwo osób szuka przepisów oraz porad kulinarnych w internecie. Coraz więcej pojawia się aplikacji dla wielbicieli gotowania i swoją popularnością doganiają strony internetowe, czy też fora poświęcone kucharzeniu. Wszystko na to wskazuje, że między innymi przez takie aplikacje jakie przedstawimy w artykule gotować będziemy z telefonem w ręce.

Wykorzystane API: https://spoonacular.com/food-api

➟ Logowanie za pomocą "Magic Link", wylogowanie (Supabase) wraz z Routingiem.

➟ Widok Home - strony głównej wraz z: sekcją "Popularne przepisy" z możliwością przechodzenia do szczegółowego przepisu i sekcją "Nasz wybór".

➟ Ścieżka /add-recipe wraz z pełni działającym formularzem dodającym przepis.

➟ Zapis przepisu z pomocą JSON-server.

➟ Wyświetlenie moich przepisów.

➟ Usunięcie przepisu.

➟ Wylosowanie losowego przepisu z API.

➟ Edycja Imienia do bazy danych w Supabase.

### Redirect URLs
URLs that auth providers are permitted to redirect to post authentication
* [https://localhost:3000](https://localhost:3000)
* [https://foodapp-sierant.vercel.app/](https://foodapp-sierant.vercel.app/)
* [https://foodapp-git-main-dzd07.vercel.app/](https://foodapp-git-main-dzd07.vercel.app/)
* [https://foodapp-dzd07.vercel.app/](https://foodapp-dzd07.vercel.app/)


Api:
`https://spoonacular.com/food-api`

## BUILT WITH


![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 	
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
[JSON Server](https://www.npmjs.com/package/json-server)


## INSTALLATION

1. Clone the repo
   ```sh
   git clone https://github.com/PiotrSierant/FoodApp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start project
   ```sh
   npm start
   ```
4. Open new terminal
   ```
   json-server --watch data/db.json --port 8000
   ```

```
Compiled successfully!

You can now view react-app in the browser.

  Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
