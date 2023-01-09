import { Iuran } from "src/iuran/entities/iuran.entity"
import { Rumah } from "src/rumah/entities/rumah.entity"
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('iuranRumah')
export class IuranRumah {
    @PrimaryGeneratedColumn()
    public iuranRumahId!: number

    @Column()
    public rumahId!: number

    @Column()
    public iuranId!: number

    @Column()
    public bulan: string

    @Column()
    public tahun: string

    @Column()
    public tanggal_terbit: string

    @Column()
    public jumlah_tagihan: string

    @Column()
    public tanggal_bayar: string

    @Column({ nullable: true })
    public bukti_bayar: string

    @ManyToOne(() => Rumah, (rumah) => rumah.iuranRumah)
    public rumah!: Rumah

    @ManyToOne(() => Iuran, (iuran) => iuran.iuranRumah)
    public iuran!: Iuran
}