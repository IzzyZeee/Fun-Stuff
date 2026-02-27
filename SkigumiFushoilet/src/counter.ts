export function counter(element: HTMLButtonElement) {
    let counter = 0;
    const setCounter = (count: number) => {
        counter = count
        element.innerHTML = `You've skigumized it ${counter} times.`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}