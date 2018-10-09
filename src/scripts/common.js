export default {
  setAuthToken (token) {
    localStorage.setItem('loginToken', JSON.stringify(token))
  },
  switchSelectedTab (tabs, selected) {
    console.log(selected)
    for (const key in tabs) {
      if (key === selected) {
        tabs[key] = true
      } else {
        tabs[key] = false
      }
    }
    return tabs
  },
  getAuthToken () {
    return {token: localStorage.getItem('loginToken')}
  },
  formToJson (el) {
    var children = el.children
    var data = {}
    for (var i = 0; i < children.length - 1; i++) {
      data[children[i].name] = children[i].value
    }
    return data
  }
}
