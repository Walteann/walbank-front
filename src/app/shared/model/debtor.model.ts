
interface Paid {
	amount: number,
	comments: string;
	date: string;
}

export class Debtor {

	id: number;
	name: string;
	amount: number;
	amountPaid: number;
	url?: string;
	updatedAt: string;
	description?: string;
	time?: number;
	debt?: string;
	paids?: Paid[];

}
