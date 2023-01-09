import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Komplek } from "src/komplek/entities/komplek.entity";
import { IuranRumah } from "src/iuranrumah/entities/iuranrumah.entity";

@Entity('rumah')
export class Rumah {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    norumah: string;

    @Column()
    no_kk: string;

    @Column()
    no_hp: number;

    @Column()
    fcm_token: string;

    @ManyToOne(() => Komplek, (komplek) => komplek.rumah)
    komplek: Komplek;

    @OneToMany(() => IuranRumah, iuranRumah => iuranRumah.rumah)
    public iuranRumah!: IuranRumah[];
}
