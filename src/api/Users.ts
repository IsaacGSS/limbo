import Users from '../../json/usuarios.json'

const userPosition = Math.floor(Math.random() * Users.user.length)

export const User = {
  name: Users.user[userPosition].name,
  surname: Users.user[userPosition].surname,
  nickname: Users.user[userPosition].nickname,
  urlGithub: Users.user[userPosition].url.Github,
  profilePicture: `${Users.user[userPosition].url.Github}.png`
}
