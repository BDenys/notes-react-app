import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import { 
  CategoriesPageComponent, 
  HomePageComponent, 
  LoginPageComponent, 
  PageNotFoundComponent,
  RegisterPageComponent 
} from '../Layouts';

export enum RouteTypes {

  HOME_PAGE_PATH = '/',
  LOGIN_PAGE_PATH = '/login',
  CATEGORIES_PATH = '/categories/:categoryId',
  REGISTER_PAGE_PATH = '/register',
  PAGE_NOT_FOUND_PATH = '*'

}

const GlobalRoutes = () => {
  const isAuth = true;

  return (
    <Routes>
      {
        isAuth 
          ? 
            <>
              <Route path={ RouteTypes.HOME_PAGE_PATH } element={ <HomePageComponent/> }  />
              <Route path={ RouteTypes.LOGIN_PAGE_PATH } element={ <LoginPageComponent/> }  />
              <Route path={ RouteTypes.CATEGORIES_PATH } element={ <CategoriesPageComponent/> }  />
              <Route path={ RouteTypes.REGISTER_PAGE_PATH } element={ <RegisterPageComponent/> }  />
              <Route path={ RouteTypes.PAGE_NOT_FOUND_PATH } element={ <PageNotFoundComponent /> } />
            </>
          :
            <>
              <Route path={ RouteTypes.LOGIN_PAGE_PATH } element={ <LoginPageComponent/> }  />
              <Route path={ RouteTypes.REGISTER_PAGE_PATH } element={ <RegisterPageComponent/> }  />
              <Route path={ RouteTypes.PAGE_NOT_FOUND_PATH } element={ <LoginPageComponent /> } />
            </>
      }
    </Routes>
  )
}
export { GlobalRoutes };