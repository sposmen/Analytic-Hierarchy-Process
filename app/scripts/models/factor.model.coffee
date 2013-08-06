angular.module('app.models', [])

.factory 'Factor', () ->
  class Factor
    
    constructor: (parent)->
      @parent = parent || null
      @childs = []
      
    getChilds:->
      @childs
      
    getChild:(index)->
      @childs[index] || false
      
    addChild:()->
      @childs.push(new Factor(@))
      
    removeChild:(index)->
      @childs.splice(index, 1);
      
    hasChilds:->
      !!@childs.length
      
    isParent:->
      !!parent || true