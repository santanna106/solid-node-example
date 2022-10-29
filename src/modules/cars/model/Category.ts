import { v4 as uuidV4 } from 'uuid';
import { Entity,Column,PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category{
    @PrimaryColumn('id')
    id?:string;
    @Column({type:'text'})
    name:string;
    description:string;
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }

}

export { Category }