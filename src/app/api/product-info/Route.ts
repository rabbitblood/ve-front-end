import { NextRequest } from "next/server";
import 

export function GET(req:NextRequest){
    console.log(req.nextUrl.searchParams.get("id"));
    return {props:{}};
}