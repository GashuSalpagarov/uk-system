import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import MainLayout from '../components/MainLayout.vue'
import ResidentHome from '../views/resident/ResidentHome.vue'
import ResidentSubmitAppeal from '../views/resident/SubmitAppeal.vue'
import ResidentRequests from '../views/resident/Requests.vue'
import ResidentRequestDetail from '../views/resident/RequestDetail.vue'
import UkHome from '../views/uk/UkHome.vue'
import UkMyHouses from '../views/uk/UkMyHouses.vue'
import UkRequests from '../views/uk/UkRequests.vue'
import UkCalendar from '../views/uk/UkCalendar.vue'
import UkViolations from '../views/uk/UkViolations.vue'
import UkCompany from '../views/uk/UkCompany.vue'
import UkProperty from '../views/uk/UkProperty.vue'
import UkRequest from '../views/uk/UkRequest.vue'
// import ResidentMyAppeals from '../views/resident/MyAppeals.vue'
// import UkIncomingAppeals from '../views/uk/UkIncomingAppeals.vue'
// import UkWorkCalendar from '../views/uk/UkWorkCalendar.vue'
// import UkCompletedWorks from '../views/uk/UkCompletedWorks.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import AdminProperty from '../views/admin/AdminProperty.vue'
import AdminCompany from '../views/admin/AdminCompany.vue'
import AdminCity from '../views/admin/AdminCity.vue'
import AdminCompanies from '../views/admin/AdminCompanies.vue'
import AdminViolations from '../views/admin/AdminViolations.vue'
import AdminRequest from '../views/admin/AdminRequest.vue'
// import AdminCityMap from '../views/admin/AdminCityMap.vue'
// import AdminManagementCompanies from '../views/admin/AdminManagementCompanies.vue'
// import AdminAnalytics from '../views/admin/AdminAnalytics.vue'
// import AdminResidentsAppeals from '../views/admin/AdminResidentsAppeals.vue'
// import AdminViolations from '../views/admin/AdminViolations.vue'
// import AdminHousesManagement from '../views/admin/AdminHousesManagement.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'resident/home',
        name: 'resident-home',
        component: ResidentHome
      },
      {
        path: 'resident/submit-appeal',
        name: 'resident-submit-appeal',
        component: ResidentSubmitAppeal
      },
      {
        path: 'resident/requests',
        name: 'resident-requests',
        component: ResidentRequests
      },
      {
        path: 'resident/request',
        name: 'resident-request-detail',
        component: ResidentRequestDetail
      },
      {
        path: 'uk/home',
        name: 'uk-home',
        component: UkHome
      },
      {
        path: 'uk/houses',
        name: 'uk-houses',
        component: UkMyHouses
      },
      {
        path: 'uk/requests',
        name: 'uk-requests',
        component: UkRequests
      },
      {
        path: 'uk/calendar',
        name: 'uk-calendar',
        component: UkCalendar
      },
      {
        path: 'uk/violations',
        name: 'uk-violations',
        component: UkViolations
      },
      {
        path: 'uk/company',
        name: 'uk-company',
        component: UkCompany
      },
      {
        path: 'uk/property',
        name: 'uk-property',
        component: UkProperty
      },
      {
        path: 'uk/request',
        name: 'uk-request',
        component: UkRequest
      },
      // {
      //   path: 'resident/my-appeals',
      //   name: 'resident-my-appeals',
      //   component: ResidentMyAppeals
      // },
      // УК
      // {
      //   path: 'uk/home',
      //   name: 'uk-home',
      //   component: UkHome
      // },
      // {
      //   path: 'uk/my-houses',
      //   name: 'uk-my-houses',
      //   component: UkMyHouses
      // },
      // {
      //   path: 'uk/incoming-appeals',
      //   name: 'uk-incoming-appeals',
      //   component: UkIncomingAppeals
      // },
      // {
      //   path: 'uk/work-calendar',
      //   name: 'uk-work-calendar',
      //   component: UkWorkCalendar
      // },
      // {
      //   path: 'uk/completed-works',
      //   name: 'uk-completed-works',
      //   component: UkCompletedWorks
      // },
      // Мэрия
      {
        path: 'admin/home',
        name: 'admin-home',
        component: AdminHome
      },
      {
        path: 'admin/property',
        name: 'admin-property',
        component: AdminProperty
      },
      {
        path: 'admin/company',
        name: 'admin-company',
        component: AdminCompany
      },
      {
        path: 'admin/city',
        name: 'admin-city',
        component: AdminCity
      },
      {
        path: 'admin/companies',
        name: 'admin-companies',
        component: AdminCompanies
      },
      {
        path: 'admin/violations',
        name: 'admin-violations',
        component: AdminViolations
      },
      {
        path: 'admin/request',
        name: 'admin-request',
        component: AdminRequest
      },
      // {
      //   path: 'admin/city-map',
      //   name: 'admin-city-map',
      //   component: AdminCityMap
      // },
      // {
      //   path: 'admin/management-companies',
      //   name: 'admin-management-companies',
      //   component: AdminManagementCompanies
      // },
      // {
      //   path: 'admin/analytics',
      //   name: 'admin-analytics',
      //   component: AdminAnalytics
      // },
      // {
      //   path: 'admin/residents-appeals',
      //   name: 'admin-residents-appeals',
      //   component: AdminResidentsAppeals
      // },
      // {
      //   path: 'admin/violations',
      //   name: 'admin-violations',
      //   component: AdminViolations
      // },
      // {
      //   path: 'admin/houses-management',
      //   name: 'admin-houses-management',
      //   component: AdminHousesManagement
      // },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
