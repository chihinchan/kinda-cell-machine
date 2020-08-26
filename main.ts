controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    let targetTileX = currentTileX -1
    //Are we going to move off the map to the LEFT or into a wall?
    if(currentTileX != 0 && !currentLevel.isWall(targetTileX, currentTileY)){
        currentTileX  = targetTileX
        tiles.placeOnTile(rect, tiles.getTileLocation(currentTileX, currentTileY))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    let targetTileX = currentTileX +1

    //Get the width, in tiles (not pixels)
    let w = currentLevel.width

    //Are we going to move off the map to the RIGHT or into a wall? 
    if(currentTileX != w && !currentLevel.isWall(targetTileX, currentTileY)){
        currentTileX  = targetTileX
        tiles.placeOnTile(rect, tiles.getTileLocation(currentTileX, currentTileY))
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if(currentTileY != 0 && !currentLevel.isWall(currentTileX, currentTileY-1)){
        currentTileY  = currentTileY - 1 
        tiles.placeOnTile(rect, tiles.getTileLocation(currentTileX, currentTileY))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if(currentTileY !=  currentLevel.height && !currentLevel.isWall(currentTileX, currentTileY+1)){
        currentTileY  = currentTileY + 1 
        tiles.placeOnTile(rect, tiles.getTileLocation(currentTileX, currentTileY))
    }
})


let rect: Sprite = null
let level1 = tiles.createTilemap(hex`0a000800040303030303030303070506060606010101010805060202020101010108050602020201010101080506020202010101010805060202020101010108050606060601010101080b0a0a0a0a0a0a0a0a09`, img`
    2 2 2 2 2 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 . . . . 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast], TileScale.Sixteen)
tiles.setTilemap(level1)
rect = sprites.create(img`
    2 2 2 . . . . . . . . . 2 2 2 
    2 5 5 . . . . . . . . . 5 5 2 
    2 5 . . . . . . . . . . . 5 2 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    2 5 . . . . . . . . . . . 5 2 
    2 5 5 . . . . . . . . . 5 5 2 
    2 2 2 . . . . . . . . . 2 2 2 
    `, SpriteKind.Player)


//Get set the starting location in tiles. 1 tile = 15px x 15px
let currentTileX = 1
let currentTileY = 1
let currentLevel = level1
tiles.placeOnTile(rect, tiles.getTileLocation(currentTileX, currentTileY))
tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), img` `)

