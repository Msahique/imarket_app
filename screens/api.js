export const performLogin = async (username, pwd) => {
    const urlPath = `http://124.40.247.222:8080/registrations/user/login?loginId=${username}&password=${pwd}`;
  
    return fetch(urlPath, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {}
    });
  };
  