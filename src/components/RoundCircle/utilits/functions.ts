
type RefDiv = React.RefObject<HTMLDivElement>
type RefMut = React.MutableRefObject<number>



export const restart = (
  outerArrow: RefDiv,
  innerArrow: RefDiv,
  littleArrowDeg: RefMut,
  bigArrowDeg: RefMut,
  countLoop: RefMut,
  cleanMessagesStore: ()=>void,
  cleanMessages: () => void,
  setStatusButtons: (arg: any) => void,
  elem: any,
  millseconds:RefMut,
  millsecondsTime:RefDiv
) => {

  restart()
    function restart() {
      bigArrowDeg.current = 45
      if (outerArrow.current && innerArrow.current) {
        outerArrow.current.style.transform = `rotate(${45}deg)`
        innerArrow.current.style.transform = `rotate(${0}deg)`
      }
      littleArrowDeg.current = 0
      clearDisplay()
      setStatusButtons(elem)
      cleanMessagesStore()
      cleanMessages()
      countLoop.current = 0
  }

    function clearDisplay() {
      millseconds.current = 0
      if (millsecondsTime.current) {
        millsecondsTime.current.textContent = '00:00:00'
      }
    }
}
export const stop = (
  move: NodeJS.Timer,
  setStatusButtons: (arg: any) => void,
  flag: boolean,
  elem: any
) => {
  clearInterval(move)
  setStatusButtons(elem)
  flag = false
}