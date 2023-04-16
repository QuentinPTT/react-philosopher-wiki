async function getPhilosophers() {
    try {
      const response = await fetch('/philosophers.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export default getPhilosophers;
  