export default function date(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    return `${year}-${month < 10 ? "0" + month.toString() : month}-${day < 10 ? "0" + day.toString() : day}`
}