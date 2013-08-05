angular.module('app.models', [])

.factory 'Factor', () ->
  class Factor
    
    constructor: (parent)->
      @parent = parent || null
      @name = 'Sample Factor'
      @description = 'This is my description'
      @childs = []
      
    getChilds:->
      @childs
      
    getChild:(index)->
      @childs[index] || false
      
    addChild:(factor)->
      @childs.push factor
      
    removeChild:(index)->
      @childs.splice(index, 1);
      
    hasChilds:->
      !!@childs.length