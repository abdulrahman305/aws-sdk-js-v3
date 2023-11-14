// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import {
  CreateWorkerConfigurationRequest,
  CreateWorkerConfigurationRequestFilterSensitiveLog,
  CreateWorkerConfigurationResponse,
} from "../models/models_0";
import { de_CreateWorkerConfigurationCommand, se_CreateWorkerConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkerConfigurationCommand}.
 */
export interface CreateWorkerConfigurationCommandInput extends CreateWorkerConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerConfigurationCommand}.
 */
export interface CreateWorkerConfigurationCommandOutput extends CreateWorkerConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a worker configuration using the specified properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, CreateWorkerConfigurationCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, CreateWorkerConfigurationCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // CreateWorkerConfigurationRequest
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   propertiesFileContent: "STRING_VALUE", // required
 * };
 * const command = new CreateWorkerConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerConfigurationResponse
 * //   creationTime: new Date("TIMESTAMP"),
 * //   latestRevision: { // WorkerConfigurationRevisionSummary
 * //     creationTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     revision: Number("long"),
 * //   },
 * //   name: "STRING_VALUE",
 * //   workerConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkerConfigurationCommandInput - {@link CreateWorkerConfigurationCommandInput}
 * @returns {@link CreateWorkerConfigurationCommandOutput}
 * @see {@link CreateWorkerConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your
 *          request with another name.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 */
export class CreateWorkerConfigurationCommand extends $Command<
  CreateWorkerConfigurationCommandInput,
  CreateWorkerConfigurationCommandOutput,
  KafkaConnectClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateWorkerConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkerConfigurationCommandInput, CreateWorkerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkerConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "CreateWorkerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkerConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KafkaConnect",
        operation: "CreateWorkerConfiguration",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateWorkerConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkerConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWorkerConfigurationCommandOutput> {
    return de_CreateWorkerConfigurationCommand(output, context);
  }
}
