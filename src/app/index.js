//Next.JS FUll-Stack Project(Resort Bookings)Part-1:::
//----------------------------------------------------

//Topics:
      //1. Pages(User Registration) :in this (user) is a common route -->(user)/register/page.jsx and components/RegistrationForm.jsx
      //2. MongoDB connection : .env and utils/config/db.js and  npm i mongoose and npm i mongodb and utils/models/User.js this user input data is stored in serverActions/registerAction.js
      //3. Save User Record in DB(Server Actions ) : serverActions/registerAction.js
      //4. Next_Auth Config (user authentication) : npm install next-auth@beta  and folder structure is followed in this api/auth/[...nextauth] /route.js and auth.js and 
      //5. User Login : (user)/login/page.jsx and components/UserLogin.jsx and serverActions/loginAction.js and components/UserNavigation.jsx
      //6.Admin page : admin/page.jsx this admin page is a main page so to protect that page , in mongodb :add data :insert document :this data is inserted manually  ,,, components/AdminNavbar.jsx and components/AddProduct.jsx & this component having some css that is components.module.css  and util/config/models/Product.js and to create a routes in src/app ---> api/ admin/add-product /route.js and in    public folder create one uploads folder  and create another route :api/users/route.js and in this users/[id]/route.js and api/admin/product/[id]/route.js
      //7.Product Collections  :components/ProductCollection.jsx
      //8. Individual Products : (user)/detail/[id]/page.jsx 
      //9. Calender Component  :in google (react date range) : npm install --save react-date-range and npm install --save react date-fns
      //10.User Booking Records  : utils/models/Bookings.js and serverActions/bookingActions.js
      //11. Deployment  :

      
      //first clear Page.js and global.css and page.module.css