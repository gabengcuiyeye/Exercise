#[derive(Debug)]
pub struct CompUnit {
    pub func_def: FuncDef,
}
impl CompUnit {
    pub fn gen_ir(&self) -> String {
        return self.func_def.gen_ir();
    }
}

#[derive(Debug)]
pub struct FuncDef {
    pub func_type: FuncType,
    pub ident: String,
    pub block: Block,
}
impl FuncDef {
    pub fn gen_ir(&self) -> String {
        return "fun @".to_owned()
            + self.ident.as_str()
            + "():"
            + self.func_type.gen_ir().as_str()
            + "{"
            + "%entry:"
            + "ret "
            + self.block.gen_ir().as_str()
            + "}";
    }
}

#[derive(Debug)]
pub struct Block {
    pub stmt: Stmt,
}
impl Block {
    pub fn gen_ir(&self) -> String {
        return self.stmt.gen_ir();
    }
}

#[derive(Debug)]
pub struct Stmt {
    pub num: Number,
}
impl Stmt {
    pub fn gen_ir(&self) -> String {
        return self.num.to_string();
    }
}

#[derive(Debug)]
pub enum FuncType {
    Int,
}
impl FuncType {
    pub fn gen_ir(&self) -> String {
        match self {
            FuncType::Int => "i32".to_owned(),
        }
    }
}

use i32 as Number;
