import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
} from '@nestjs/common';
import { isArray } from 'lodash';
import { catchError, Observable } from 'rxjs';

export class AppErrorDTO {
  message: string;
  statusCode: number;
}

@Injectable()
export class AppErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        const errorStatusCode =
          error.response?.statusCode || error.statusCode || error.status || 500;
        const errorMessage = isArray(error.response?.message)
          ? error.response?.message[0]
          : error.response?.message || error.message || 'Internal Server Error';

        throw new HttpException(errorMessage, errorStatusCode);
      }),
    );
  }
}

export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
