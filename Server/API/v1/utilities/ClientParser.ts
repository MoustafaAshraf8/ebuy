import { parse } from "path";

export class ClientParser {
  public static clientsignup(client: string): any[] {
    const parsed = JSON.parse(client);
    let result = [];

    for (let i = 0; i < parsed.length; i++) {
      let client = {
        person_id: parsed[i].person_id,
        person_name: parsed[i].person_name,
        person_email: parsed[i].person_email,
        person_phone: parsed[i].person_phone,
        person_address: parsed[i].person_address,
      };
      result.push(client);
    }
    return result;
  }
}
