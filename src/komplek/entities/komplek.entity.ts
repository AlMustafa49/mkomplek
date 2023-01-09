import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rumah } from "src/rumah/entities/rumah.entity";

@Entity('komplek')
export class Komplek {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama: string;

    @Column()
    alamat: string;

    @Column()
    no_hp: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    fcm_token: string;

    @Column({ nullable: true })
    password_bersama: string;

    @OneToMany(() => Rumah, (rumah) => rumah.komplek)
    rumah: Rumah[]
}
