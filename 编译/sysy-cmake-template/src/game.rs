
  

pub fn test(){
    use std::io;
    use rand::Rng;
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("The secret number is: {secret_number}");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");  
}


// 引用的学习
pub fn test2(){
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
    let mut s = String::from("hello");
    change(&mut s);
    println!("s is '{}'", s1);
    print_enum();
    
}

fn calculate_length(s: &String) -> usize {
    s.len()
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
    println!("some_string id '{}'", some_string);
}

fn print_enum(){
    #[derive(Debug)]
    enum IpAddr {
        V4(String),
        V6(String),
    }
    let home = IpAddr::V4(String::from("127.0.0.1"));
    let loopback = IpAddr::V6(String::from("::1"));
    println!("home is '{:?}',loopback is '{:?}'", home, loopback);
}


