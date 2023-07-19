

export const validate = async (token: String) => {
    try {
      const response = await fetch(`auth/validate?token=${token}`);
      if (response.ok && response.status === 200) {
        return await response.json();
      }
    } catch (err) {
      console.log(err);
      return false;
    };
  };