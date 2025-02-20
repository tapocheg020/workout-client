import Auth from './../components/screens/auth/Auth'
import NewWorkout from './../components/screens/new-workout/NewWorkout'
import Profile from './../components/screens/profile/Profile'
import Home from './../components/screens/home/Home'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false
	}
]
