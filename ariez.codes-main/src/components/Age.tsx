export default function Age() {
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("01/16/2009");
    var age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return <span>{getAge()}</span>;
}
