class List extends HTMLElement {
   constructor () {
      super()
      this._unorderedList = document.createElement('ul')

   }

   connectedCallback () {
      const values = this.getAttribute('values')
      const valArr = Array.from(values.split(', '))
      const valArrLen = valArr.length
      for (let i = 0; i < valArrLen; i++) {
         const li = document.createElement('li')
         li.textContent = valArr[i]
         this._unorderedList.appendChild(li)
         console.log(li)
      }
      this.appendChild(this._unorderedList)

   }
}

customElements.define('j-list', List)