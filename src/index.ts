// TypeScript - Enums

//enum - group of constants

//number 

enum Direction {
    East = 100,
    West,
    South,
    North,
}

console.log(Direction.South)

enum StatusCode {
    Success = 200,
    Unauthorized = 401,
    ServerError = 500
}


//string

enum Direction1 {
    East = 'East',
    West = 'West',
    South = 'South',
    North = 'North',
}

console.log(Direction1.South)