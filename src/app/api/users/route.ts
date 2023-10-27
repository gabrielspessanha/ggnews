import { NextResponse } from "next/server";

const users = [
  {id: 1, name: 'Gabriel'},
  {id: 2, name: 'Gabrielle'},
  {id: 3, name: 'João paulo'}
]

export async function GET(request: Request){
  return NextResponse.json({users, status: 200})
}