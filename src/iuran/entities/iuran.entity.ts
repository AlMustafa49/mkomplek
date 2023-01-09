import { IuranRumah } from "src/iuranrumah/entities/iuranrumah.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('iuran')
export class Iuran {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kode: string;

    @Column()
    nama: string;

    @Column()
    jumlah: number;

    @OneToMany(() => IuranRumah, iuranRumah => iuranRumah.iuran)
    public iuranRumah!: IuranRumah[];
}
